import { useState, useEffect } from 'react'

const useGraphics = survey => {
    const [data, setData] = useState([{
        labels: []
    }])
       
    useEffect(() => {
        const colors = ['#da1e37', '#0466c8', '#2ec4b6', '#fdffb6', '#cdb4db', '#81b29a', '#6761df', '#adb5bd'];
        const survey = [
            {
              name: "Mi pregunta",
              options: [
                { option: "1", rate: 3 },
                { option: "2", rate: 1 },
                { option: "3", rate: 1 },
              ],
            },
            {
              name: "Mi pregunta 2",
              options: [
                { option: "1", rate: 2 },
                { option: "2", rate: 5 },
                { option: "3", rate: 2 },
              ],
            },
            {
              name: "Mi pregunta 3",
              options: [
                { option: "1", rate: 6 },
                { option: "2", rate: 7 },
                { option: "3", rate: 2 },
              ],
            },
          ];
          
        setData(
            {
                name: survey.map(resp => {return resp.name}),
                labels: survey.map(response => response.options.map(response => {return response.option})),
                datasets: {
                    data: survey.map(resp => resp.options.map(response => {return response.rate})),
                    backgroundColor: survey.map(resp => resp.options.map((resp, index) => {return colors[index]}))
                }
            })
    }, [setData])

    return data;
}

export default useGraphics