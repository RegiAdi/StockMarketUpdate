import React, {useState, useEffect} from 'react'
import api from './api'

export default function EffectiveSpread() {
    const [effectiveSpread, setEffectiveSpread] = useState([])

    useEffect(() => {
        api.get('/stock/aapl/effective-spread')
            .then(response => {
                console.log(response.data)
                setEffectiveSpread(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Effective Spread</h1>
            {console.log(effectiveSpread)}
            {effectiveSpread.map((spread, index) =>
                <ul key={index}>
                    {Object.keys(spread).map(key =>
                        <li key={key}>{key}: {spread[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
