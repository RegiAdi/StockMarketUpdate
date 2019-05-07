import React, {useState, useEffect} from 'react'
import api from './api'

export default function Estimates() {
    const [estimates, setEstimates] = useState({
        "symbol": "",
        "estimates": []
    })

    useEffect(() => {
        api.get('/stock/aapl/estimates')
            .then(response => {
                setEstimates(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Estimates</h1>

            {estimates.estimates.map((estimate, index) =>
                <ul key={index}>
                    {Object.keys(estimate).map(key =>
                        <li key={key}>{key}: {estimate[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
