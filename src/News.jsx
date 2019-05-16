import React, {useState, useEffect} from 'react'
import api from './api'

export default function News() {
    const [news, setNews] = useState([])

    useEffect(() => {
        api.get('/stock/aapl/news')
            .then(response => {
                setNews(response.data)
            })
    }, [])

    return (
        <div>
            <h1>News</h1>

            {news.map((aNews, index) =>
                <ul key={index}>
                    {index}
                    {Object.keys(aNews).map(key =>
                        <li key={key}>{key}: {aNews[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
