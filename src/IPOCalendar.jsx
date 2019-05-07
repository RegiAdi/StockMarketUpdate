import React, {useState, useEffect} from 'react'
import api from './api'

export default function IPOCalendar() {
    const [ipoCalendar, setIpoCalendar] = useState({
        "rawData": [],
        "viewData": []
    })

    useEffect(() => {
        api.get('/stock/market/upcoming-ipos')
            .then(response => {
                setIpoCalendar(response.data)
            })
    }, [])

    return (
        <div>
            <h1>IPO Calendar (upcoming)</h1>

            <h2>Raw Data</h2>
            {ipoCalendar.rawData.map((ipo, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(ipo).map(key =>
                        <li key={key}>{key}: {ipo[key]}</li>
                    )}
                </ul>
            )}

            <h2>View Data</h2>
            {ipoCalendar.viewData.map((ipo, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(ipo).map(key =>
                        <li key={key}>{key}: {ipo[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
