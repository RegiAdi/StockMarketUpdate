import React, {useState} from 'react'
import Price from './Price'
import BalanceSheet from './BalanceSheet'
import BatchRequests from './BatchRequests'
import Book from './Book'
import CashFlow from './CashFlow'
import Collections from './Collections'

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

                <button onClick={() => setActiveEndpoint('cashFlow')}>
                    Cash Flow
                </button>

                <button onClick={() => setActiveEndpoint('collections')}>
                    Collections (most active)
                </button>
            </p>

            {activeEndpoint === 'price' && <Price />}
            {activeEndpoint === 'balanceSheet' && <BalanceSheet />}
            {activeEndpoint === 'book' && <Book />}
            {activeEndpoint === 'batchRequests' && <BatchRequests />}
            {activeEndpoint === 'cashFlow' && <CashFlow />}
            {activeEndpoint === 'collections' && <Collections />}

        </div>
    )
}
