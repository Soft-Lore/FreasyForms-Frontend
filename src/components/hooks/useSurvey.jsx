import { useState } from "react";

export default function useSurvey(toggleModal) {
  const [survey, setSurvey] = useState({
    name: "",
    questions: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(survey);
  };

  const createQuestion = (e) => {
    if (e.target.value === "open") {
      createOpenQuestion();
    } else {
      createMultipleSelectionQuestion(survey.questions.length + 1);
    }

    e.target.firstChild.selected = true;
    toggleModal();
  };

  const createOpenQuestion = () => {
    setSurvey({
      ...survey,
      questions: [
        ...survey.questions,
        {
          i: survey.questions.length + 1,
          name: "",
          type: "open",
        },
      ],
    });
  };

  const createMultipleSelectionQuestion = (question) => {
    setSurvey({
      ...survey,
      questions: [
        ...survey.questions,
        {
          i: question,
          name: "",
          type: "options",
          options: [
            {
              i: 0,
              question: question,
              name: "",
            },
          ],
        },
      ],
    });
  };

  const addOptionToQuestion = (question) => {
    const { temporalSurvey, searchSurvey } = getDivideSurvey(question);
    let optionIndex =
      searchSurvey.options[searchSurvey.options.length - 1]?.i + 1 || 0;

    searchSurvey.options = [
      ...searchSurvey.options,
      {
        i: optionIndex,
        question: question,
        name: "",
      },
    ];

    setSurvey({
      ...survey,
      questions: [...temporalSurvey, searchSurvey],
    });
  };

  const getDivideSurvey = (i) => {
    const temporalSurvey = survey.questions.filter(
      (questionItem) => questionItem.i !== i
    );
    const searchSurvey = survey.questions.find(
      (questionItem) => questionItem.i === i
    );

    return { temporalSurvey, searchSurvey };
  };

  const handleInput = (e) => {
    setSurvey({
      ...survey,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputQuestion = (e, question) => {
    const { temporalSurvey, searchSurvey } = getDivideSurvey(question);

    searchSurvey.name = e.target.value;

    setSurvey({
      ...survey,
      questions: [...temporalSurvey, searchSurvey],
    });
  };

  const handleInputOption = (e, i, question) => {
    const { temporalSurvey, searchSurvey } = getDivideSurvey(question);

    searchSurvey.options[i].name = e.target.value;

    setSurvey({
      ...survey,
      questions: [...temporalSurvey, searchSurvey],
    });
  };

  const removeOptionToQuestion = (question, i) => {
    const { temporalSurvey, searchSurvey } = getDivideSurvey(question);

    const deleteOption = searchSurvey.options.filter(
      (option) => option.i !== i
    );

    searchSurvey.options = deleteOption;

    setSurvey({
      ...survey,
      questions: [...temporalSurvey, searchSurvey],
    });
  };

  const removeQuestion = (question) => {
    const { temporalSurvey } = getDivideSurvey(question);

    setSurvey({
      ...survey,
      questions: [...temporalSurvey],
    });
  };

  return {
    survey,
    handleSubmit,
    createQuestion,
    addOptionToQuestion,
    handleInput,
    handleInputQuestion,
    handleInputOption,
    removeOptionToQuestion,
    removeQuestion,
  };
}
