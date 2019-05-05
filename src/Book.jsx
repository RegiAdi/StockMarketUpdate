import React, {useState, useEffect} from 'react'
import api from './api'

export default function Book() {
    const [book, setBook] = useState({
        "quote": {
            "symbol": "AAPL",
            "companyName": "Apple, Inc.",
            "calculationPrice": "close",
            "open": null,
            "openTime": null,
            "close": 211.75,
            "closeTime": 1556913600401,
            "high": 211.84,
            "low": 210.23,
            "latestPrice": 211.75,
            "latestSource": "Close",
            "latestTime": "May 3, 2019",
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
        },
        "bids": [],
        "asks": [],
        "systemEvent": []
    })

    useEffect(() =>{
        api.get('/stock/aapl/book')
            .then(response => {
                setBook(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Book</h1>

            <h2>Quote</h2>
            {Object.keys(book.quote).map(key =>
                <p key={key}>{key}: {book.quote[key]}</p>
            )}
        </div>
    )
}
