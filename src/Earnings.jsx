import React, {useState, useEffect} from 'react'
import api from './api'

export default function Earnings() {
    const [earnings, setEarnings] = useState({
        "symbol": "",
        "earnings": []
    })

    useEffect(() => {
        api.get('/stock/aapl/earnings')
            .then(response => {
                setEarnings(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Earnings</h1>

            {earnings.earnings.map((earning, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(earning).map(key =>
                        <li key={key}>{key}: {earning[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
