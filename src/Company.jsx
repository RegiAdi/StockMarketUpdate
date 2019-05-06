import React, {useState, useEffect} from 'react'
import api from './api'

export default function Company() {
    const [company, setCompany] = useState({
		"symbol": "",
		"companyName": "",
		"exchange": "",
		"industry": "",
		"website": "",
		"description": "",
		"CEO": "",
		"securityName": " ",
		"issueType": "",
		"sector": "",
		"employees": 0,
		"tags":[]
    })

    useEffect(() => {
        api.get('/stock/aapl/company')
            .then(response => {
                setCompany(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Company</h1>

            {Object.keys(company).map(key =>
                <p key={key}>{key}: {company[key]}</p>
            )}
        </div>
    )
}
