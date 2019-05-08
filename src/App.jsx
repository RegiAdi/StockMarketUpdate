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
import EffectiveSpread from './EffectiveSpread'
import Estimates from './Estimates'
import HistoricalPrice from './HistoricalPrice'
import IncomeStatement from './IncomeStatement'
import IntradayPrices from './IntradayPrices'
import IPOCalendar from './IPOCalendar'
import KeyStats from './KeyStats'
import LargestTrades from './LargestTrades'
import List from './List'
import Logo from './Logo'

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

                <button onClick={() => setActiveEndpoint('effectiveSpread')}>
                    Effective Spread
                </button>

                <button onClick={() => setActiveEndpoint('estimates')}>
                    Estimates
                </button>

                <button onClick={() => setActiveEndpoint('historicalPrice')}>
                    Historical Price
                </button>

                <button onClick={() => setActiveEndpoint('incomeStatement')}>
                    Income Statement
                </button>

                <button onClick={() => setActiveEndpoint('intradayPrices')}>
                    Intraday Prices
                </button>

                <button onClick={() => setActiveEndpoint('ipoCalendar')}>
                    IPO Calendar
                </button>

                <button onClick={() => setActiveEndpoint('keyStats')}>
                    Key Stats
                </button>

                <button onClick={() => setActiveEndpoint('largestTrades')}>
                    Largest Trades
                </button>

                <button onClick={() => setActiveEndpoint('list')}>
                    List
                </button>

                <button onClick={() => setActiveEndpoint('logo')}>
                    Logo
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
            {activeEndpoint === 'effectiveSpread' && <EffectiveSpread />}
            {activeEndpoint === 'estimates' && <Estimates />}
            {activeEndpoint === 'historicalPrice' && <HistoricalPrice />}
            {activeEndpoint === 'incomeStatement' && <IncomeStatement />}
            {activeEndpoint === 'intradayPrices' && <IntradayPrices />}
            {activeEndpoint === 'ipoCalendar' && <IPOCalendar />}
            {activeEndpoint === 'keyStats' && <KeyStats />}
            {activeEndpoint === 'largestTrades' && <LargestTrades />}
            {activeEndpoint === 'list' && <List />}
            {activeEndpoint === 'logo' && <Logo />}
        </div>
    )
}
