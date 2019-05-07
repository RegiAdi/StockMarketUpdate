import React, {useState, useEffect} from 'react'
import api from './api'

export default function EffectiveSpread() {
    const [effectiveSpread, setEffectiveSpread] = useState([])

    useEffect(() => {
        api.get('/stock/aapl/effective-spread')
            .then(response => {
                setEffectiveSpread(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Effective Spread</h1>

            {effectiveSpread.map((spread, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(spread).map(key =>
                        <li key={key}>{key}: {spread[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
