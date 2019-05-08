import React, {useState, useEffect} from 'react'
import api from './api'

export default function LargestTrades() {
    const [largestTrades, setLargestTrades] = useState([])

    useEffect(() => {
        api.get('stock/aapl/largest-trades')
            .then(response => {
                setLargestTrades(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Largest Trades</h1>

            {largestTrades.map((trade, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(trade).map(key =>
                        <li key={key}>{key}: {trade[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
