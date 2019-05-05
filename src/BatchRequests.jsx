import React, {useState, useEffect} from 'react'
import api from './api'

export default function BatchRequests() {
    const [batchRequests, setBatchRequests] = useState({
        "chart": [],
        "news": [],
        "quote": {
            "symbol": "",
            "companyName": "",
            "calculationPrice": "",
            "open": null,
            "openTime": null,
            "close": 211.75,
            "closeTime": 1556913600401,
            "high": 211.84,
            "low": 210.23,
            "latestPrice": 211.75,
            "latestSource": "",
            "latestTime": "",
            "latestUpdate": 1556913600401,
            "latestVolume": 21027622,
            "iexRealtimePrice": null,
            "iexRealtimeSize": null,
            "iexLastUpdated": null,
            "delayedPrice": 211.77,
            "delayedPriceTime": 1556914500002,
            "extendedPrice": 211.95,
            "extendedChange": 0.2,
            "extendedChangePercent": 0.00094,
            "extendedPriceTime": 1557014381819,
            "previousClose": 209.15,
            "change": 2.6,
            "changePercent": 0.01243,
            "iexMarketPercent": null,
            "iexVolume": null,
            "avgTotalVolume": 27802670,
            "iexBidPrice": null,
            "iexBidSize": null,
            "iexAskPrice": null,
            "iexAskSize": null,
            "marketCap": 974278690000,
            "peRatio": 17.66,
            "week52High": 233.47,
            "week52Low": 142,
            "ytdChange": 0.353299
        }
    })

    useEffect(() => {
        api.get('/stock/aapl/batch?types=quote,news,chart&range=1m&last=1')
            .then(response => {
                setBatchRequests(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Batch Requests</h1>

            <h2>Quote</h2>
            {Object.keys(batchRequests.quote).map(key =>
                <p key={key}>{key}: {batchRequests.quote[key]}</p>
            )}

            <h2>News</h2>
            {batchRequests.news.map((news, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(news).map(key =>
                        <li key={key}>{key}: {news[key]}</li>
                    )}
                </ul>
            )}

            <h2>Chart</h2>
            {batchRequests.chart.map((chart, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(chart).map(key =>
                        <li key={key}>{key}: {chart[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
