import React, {useState} from 'react'
import Price from './Price'
import BalanceSheet from './BalanceSheet'
import BatchRequests from './BatchRequests'
import Book from './Book'
import CashFlow from './CashFlow'
import Collections from './Collections'
import Company from './Company'
import DelayedQuote from './DelayedQuote'
import Dividends from './Dividends'
import Earnings from './Earnings'
import EarningsToday from './EarningsToday'

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

                <button onClick={() => setActiveEndpoint('company')}>
                    Company
                </button>

                <button onClick={() => setActiveEndpoint('delayedQuote')}>
                    Delayed Quote
                </button>

                <button onClick={() => setActiveEndpoint('dividends')}>
                    Dividends
                </button>

                <button onClick={() => setActiveEndpoint('earnings')}>
                    Earnings
                </button>

                <button onClick={() => setActiveEndpoint('earningsToday')}>
                    Earnings Today
                </button>
            </p>

            {activeEndpoint === 'price' && <Price />}
            {activeEndpoint === 'balanceSheet' && <BalanceSheet />}
            {activeEndpoint === 'book' && <Book />}
            {activeEndpoint === 'batchRequests' && <BatchRequests />}
            {activeEndpoint === 'cashFlow' && <CashFlow />}
            {activeEndpoint === 'collections' && <Collections />}
            {activeEndpoint === 'company' && <Company />}
            {activeEndpoint === 'delayedQuote' && <DelayedQuote />}
            {activeEndpoint === 'dividends' && <Dividends />}
            {activeEndpoint === 'earnings' && <Earnings />}
            {activeEndpoint === 'earningsToday' && <EarningsToday />}

        </div>
    )
}
