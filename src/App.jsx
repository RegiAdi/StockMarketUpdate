import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function App() {
    const [price, setPrice] = useState(0)

    useEffect(() => {
        axios.get('https://sandbox.iexapis.com/beta/stock/aapl/price?token=Tpk_2596d5035d964c71a66255c363ec1e3d')
        .then(response => {
            console.log(response)
            setPrice(response.data)
        })
    }, [])
    return ( 
        <div className="App">
            <h1>Stock Market Update</h1>    
            <p>{price}</p>
        </div>
    )
}