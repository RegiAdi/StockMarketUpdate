import React, {useState, useEffect} from 'react'
import api from './api'

export default function EarningsToday() {
    const [earningsToday, setEarningsToday] = useState({
        "bto": [],
        "amc": [],
        "other": []
    })

    useEffect(() => {
        api.get('/stock/market/today-earnings')
            .then(response => {
                setEarningsToday(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Earnings Today</h1>
            {console.log(earningsToday)}

            <h2>BTO</h2>
            {earningsToday.bto.map((earning, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(earning).map(key =>
                        key !== 'quote' && <li key={key}>{key}: {earning[key]}</li>

                    )}

                    <p>quote</p>
                    {Object.keys(earning.quote).map(key =>
                        <li key={key}>{key}: {earning.quote[key]}</li>
                    )}
                </ul>
            )}

            <h2>AMC</h2>
            {earningsToday.amc.map((earning, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(earning).map(key =>
                        key !== 'quote' && <li key={key}>{key}: {earning[key]}</li>

                    )}

                    <p>quote</p>
                    {Object.keys(earning.quote).map(key =>
                        <li key={key}>{key}: {earning.quote[key]}</li>
                    )}
                </ul>
            )}

            <h2>Other</h2>
            {earningsToday.other.map((earning, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(earning).map(key =>
                        key !== 'quote' && <li key={key}>{key}: {earning[key]}</li>

                    )}

                    <p>quote</p>
                    {Object.keys(earning.quote).map(key =>
                        <li key={key}>{key}: {earning.quote[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
