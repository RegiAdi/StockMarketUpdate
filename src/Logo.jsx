import React, {useState, useEffect} from 'react'
import api from './api'

export default function Logo() {
    const [logo, setLogo] = useState("")

    useEffect(() => {
        api.get('/stock/aapl/logo')
            .then(response => {
                setLogo(response.data.url)
            })
    }, [])

    return (
        <div>
            <h1>Logo</h1>

            <p>url: {logo}</p>
        </div>
    )
}
