import React, {useState} from 'react'
import Price from './Price'
import BalanceSheet from './BalanceSheet'
import BatchRequests from './BatchRequests'
import Book from './Book'

export default function App() {
    const [activeEndpoint, setActiveEndpoint] = useState('price')

    return (
        <div className="App">
            <h1>Stock Market Update</h1>

            <p>
                <button onClick={() => setActiveEndpoint('price')}>
                    Price
                </button>

                <button onClick={() => setActiveEndpoint('balanceSheet')}>
                    Balance Sheet
                </button>

                <button onClick={() => setActiveEndpoint('book')}>
                    Book
                </button>

                <button onClick={() => setActiveEndpoint('batchRequests')}>
                    Batch Requests
                </button>
            </p>

            {activeEndpoint === 'price' && <Price />}
            {activeEndpoint === 'balanceSheet' && <BalanceSheet />}
            {activeEndpoint === 'book' && <Book />}
            {activeEndpoint === 'batchRequests' && <BatchRequests />}

        </div>
    )
}
