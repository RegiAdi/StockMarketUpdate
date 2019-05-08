import React, {useState, useEffect} from 'react'
import api from './api'

export default function KeyStats() {
    const [keyStats, setKeyStats] = useState({
        "companyName": "Apple Inc.",
        "marketcap": 760334287200,
        "week52high": 156.65,
        "week52low": 93.63,
        "week52change": 58.801903,
        "sharesOutstanding": 5213840000,
        "float": 5203997571,
        "symbol": "AAPL",
        "avg10Volume": 2774000,
        "avg30Volume": 12774000,
        "day200MovingAvg": 140.60541,
        "day50MovingAvg": 156.49678,
        "employees": 120000,
        "ttmEPS": 16.5,
        "ttmDividendRate": 2.25,
        "dividendYield": .021,
        "nextDividendDate": '2019-03-01',
        "exDividendDate": '2019-02-08',
        "nextEarningsDate": '2019-01-01',
        "peRatio": 14,
        "beta": 1.25,
        "maxChangePercent": 153.021,
        "year5ChangePercent": 0.5902546932200027,
        "year2ChangePercent": 0.3777449874142869,
        "year1ChangePercent": 0.39751716851558366,
        "ytdChangePercent": 0.36659492036160124,
        "month6ChangePercent": 0.12208398133748043,
        "month3ChangePercent": 0.08466584665846649,
        "month1ChangePercent": 0.009668596145283263,
        "day30ChangePercent": -0.002762605699968781,
        "day5ChangePercent": -0.005762605699968781
    })

    useEffect(() => {
        api.get('/stock/aapl/stats')
            .then(response => {
                setKeyStats(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Key Stats</h1>

            {Object.keys(keyStats).map(key =>
                <p key={key}>{key}: {keyStats[key]}</p>
            )}
        </div>
    )
}
