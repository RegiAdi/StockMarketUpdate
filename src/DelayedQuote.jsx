import React, {useState, useEffect} from 'react'
import api from './api'

export default function DelayedQuote() {
    const [delayedQuote, setDelayedQuote] = useState({
        "symbol": "",
        "delayedPrice": 0,
        "delayedSize": 0,
        "delayedPriceTime": 0,
        "high": 0,
        "low": 0,
        "totalVolume": 0,
        "processedTime": 0
    })

    useEffect(() => {
        api.get('/stock/aapl/delayed-quote')
            .then(response => {
                setDelayedQuote(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Delayed Quote</h1>

            {Object.keys(delayedQuote).map(key =>
                <p key={key}>{key}: {delayedQuote[key]}</p>
            )}
        </div>
    )
}
