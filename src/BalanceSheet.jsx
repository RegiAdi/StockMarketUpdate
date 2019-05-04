import React, {useState, useEffect} from 'react'
import api from './api'

export default function BalanceSheet() {
    const [balancesheet, setBalanceSheet] = useState({
        "reportDate": "",
        "currentCash": 0,
        "shortTermInvestments": 0,
        "receivables": 0,
        "inventory": 0,
        "otherCurrentAssets": 0,
        "currentAssets": 0,
        "longTermInvestments": 0,
        "propertyPlantEquipment": 0,
        "goodwill": 0,
        "intangibleAssets": null,
        "otherAssets": 0,
        "totalAssets": 0,
        "accountsPayable": 0,
        "currentLongTermDebt": 0,
        "otherCurrentLiabilities": 0,
        "totalCurrentLiabilities": 0,
        "longTermDebt": 0,
        "otherLiabilities": 0,
        "minorityInterest": 0,
        "totalLiabilities": 0,
        "commonStock": 0,
        "retainedEarnings": 0,
        "treasuryStock": null,
        "capitalSurplus": null,
        "shareholderEquity": 0,
        "netTangibleAssets": 0
    })

    useEffect(() => {
        api.get('/stock/aapl/balance-sheet')
        .then(response => {
            setBalanceSheet(response.data.balancesheet[0])
        })
    }, [])

    return (
        <div>
            <h1>Balance Sheet</h1>
            {Object.keys(balancesheet).map(key => 
                <p key={key}>{key}: {balancesheet[key]}</p> 
            )}
        </div>

    )
}