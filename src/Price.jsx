import React, {useState, useEffect} from 'react'
import api from './api'

export default function Price() {
    const [price, setPrice] = useState(0)

    useEffect(() => {
        api.get('/stock/aapl/price')
        .then(response => {
            setPrice(response.data)
        })
    }, [])

    return (
       <div>
           <h1>Price</h1>

           <p>price: {price}</p>
       </div>
    )
}
