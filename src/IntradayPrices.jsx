import React, {useState, useEffect} from 'react'
import api from './api'

export default function IntradayPrices() {
    const [intradayPrices, setIntradayPrices] = useState([])

    useEffect(() => {
        api.get('/stock/aapl/intraday-prices')
            .then(response => setIntradayPrices(response.data))
    }, [])

    return (
        <div>
            <h1>Intraday Prices</h1>

            {intradayPrices.map((price, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(price).map(key =>
                        <li key={key}>{key}: {price[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
