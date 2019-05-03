import React from 'react'

import axios from 'axios'

export default class App extends React.Component {
    state = {
        price: 0
    }
    
    componentDidMount() {
        axios.get('https://cloud.iexapis.com/beta/stock/aapl/price?token=pk_ca88eb0f892e4e11bfcef431cd53cc99')
            .then(response => {
                console.log(response)
                const price = response.data
                this.setState({price})
            })
    }

    render() {
        return (
            <div className="App">
                <h1>Stock Market Update</h1>    
                <p>{this.state.price}</p>
            </div>
        )
    }
}