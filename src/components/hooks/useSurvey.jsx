import { useState } from "react";

export default function useSurvey(toggleModal) {
  const [error, setError] = useState("");
  const [survey, setSurvey] = useState({
    name: "",
    description: "",
    questions: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (survey.name.length > 2 && survey.description.length > 2 && survey.questions.length > 0) {
      const response = survey.questions.map((question, index) =>
        validateQuestionsToSurvey(question, index)
      );

      const data = response.find((resp) => resp.ok === false);

      if (data) setError(data.msg);
      else console.log(survey);
    } else {
      setError("favor, complete su encuesta");
    }
  };

  const validateQuestionsToSurvey = (question, index) => {
    if (question && question.name.length > 0) {
      if (question.type === "options") {
        const response = question.options.map((option, i) =>
          validateOptionToSurvey(option, i, index)
        );

        const data = response.find((resp) => resp.ok === false);

        if (data) {
          return data;
        } else {
          return {
            ok: true,
            msg: "enviado",
          };
        }
      }

      return {
        ok: true,
        msg: "enviado",
      };
    } else {
      return {
        ok: false,
        msg: `Favor, revise que los campos de la pregunta ${
          index + 1
        } esten correctos`,
      };
    }
  };

  const validateOptionToSurvey = (option, i, index) => {
    if (option && option.name.length > 0) {
      return {
        ok: true,
        msg: "enviado",
      };
    } else {
      return {
        ok: false,
        msg: `Favor, revise que la opcion ${i + 1} de la pregunta ${
          index + 1
        } esten correctos`,
      };
    }
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
    error,
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
