import React, {useState, useEffect} from 'react'
import api from './api'

export default function CashFlow() {
    const [cashFlow, setCashFlow] = useState({
        "cashflow": [],
        "symbol": ""
    })

    useEffect(() => {
        api.get('/stock/aapl/cash-flow')
            .then(response => {
                setCashFlow(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Cash Flow</h1>

            {cashFlow.cashflow.map((cashFlowData, index) =>
                <ul key={index}>
                    {index}

                    {Object.keys(cashFlowData).map(key =>
                        <li key={key}>{key}: {cashFlowData[key]}</li>
                    )}
                </ul>
            )}


        </div>
    )
}
