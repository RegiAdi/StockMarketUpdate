import React, {useState, useEffect} from 'react'
import api from './api'

export default function MarketVolume() {
    const [marketVolume, setMarketVolume] = useState([])

    useEffect(() => {
        api.get('/stock/market/volume')
            .then(response => {
                setMarketVolume(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Market Volume</h1>

            {marketVolume.map((volume, index) =>
                <ul key={index}>
                    {Object.keys(volume).map(key =>
                        <li key={key}>{key}: {volume[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
