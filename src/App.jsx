import React from 'react'
import Price from './Price'
import BalanceSheet from './BalanceSheet'
import BatchRequests from './BatchRequests'
import Book from './Book'

export default function App() {
    return (
        <div className="App">
            <h1>Stock Market Update</h1>

            <Book />
            <BatchRequests />
            <Price />
            <BalanceSheet />
        </div>
    )
}
