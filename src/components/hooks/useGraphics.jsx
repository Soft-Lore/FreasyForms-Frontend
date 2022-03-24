import { useState, useEffect } from 'react'

const useGraphics = survey => {
    const [data, setData] = useState([{
        labels: []
    }])
    
    
    useEffect(() => {
        const colors = ['#da1e37', '#0466c8', '#2ec4b6', '#fdffb6', '#cdb4db', '#81b29a', '#6761df', '#adb5bd'];
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