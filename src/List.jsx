import React, {useState, useEffect} from 'react'
import api from './api'

export default function List() {
    const [mostActive, setMostActive] = useState([])

    useEffect(() => {
        api.get('/stock/market/list/mostactive')
            .then(response => {
                setMostActive(response.data)
            })
    }, [])

    return (
        <div>
            <h1>List</h1>

            {console.log(mostActive)}

            <h2>Most Active</h2>
            {mostActive.map((item, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(item).map(key =>
                        <li key={key}>{key}: {item[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
