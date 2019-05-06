import React, {useState, useEffect} from 'react'
import api from './api'

export default function Collections() {
    const [collections, setCollections] = useState([])

    useEffect(() => {
        api.get('/stock/market/collection/list?collectionName=mostactive')
            .then(response => {
                console.log(response.data)
                setCollections(response.data)
            })
    }, [])

    return (
        <div>
            {console.log(collections)}
            <h1>Collections (most active)</h1>

            {collections.map((mostactive, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(mostactive).map(key =>
                        <li key={key}>{key}: {mostactive[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
