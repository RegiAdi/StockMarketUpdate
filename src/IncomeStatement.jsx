import React, {useState, useEffect} from 'react'
import api from './api'

export default function IncomeStatement() {
    const [incomeStatement, setIncomeStatement] = useState({
        "symbol": "",
        "income": []
    })

    useEffect(() => {
        api.get('/stock/aapl/income')
            .then(response => setIncomeStatement(response.data))
    }, [])

    return (
        <div>
            <h1>Income Statement</h1>

            {incomeStatement.income.map((income, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(income).map(key =>
                        <li key={key}>{key}: {income[key]}</li>
                    )}
                </ul>
            )}
        </div>
    )
}
