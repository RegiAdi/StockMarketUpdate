import React, {useState, useEffect} from 'react'
import api from './api'

export default function Dividends() {
    const [dividends, setDividends] = useState([])

    useEffect(() => {
        api.get('/stock/aapl/dividends/1y')
            .then(response => {
                setDividends(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Dividends</h1>

            {dividends.map((dividend, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(dividend).map(key =>
                        <li key={key}>{key}: {dividend[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}

