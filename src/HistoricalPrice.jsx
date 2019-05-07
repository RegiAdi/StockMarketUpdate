import React, {useState, useEffect} from 'react'
import api from './api'

export default function HistoricalPrice() {
    const [historicalPrice, setHistoricalPrice] = useState([])

    useEffect(() => {
        api.get('/stock/aapl/chart/1y')
            .then(response => {
                setHistoricalPrice(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Historical Price</h1>

            {historicalPrice.map((price, index) =>
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
