import React from 'react'
import Price from './Price'
import BalanceSheet from './BalanceSheet'

export default function App() {
    return ( 
        <div className="App">
            <h1>Stock Market Update</h1>    
            <Price />
            <BalanceSheet />
        </div>
    )
}