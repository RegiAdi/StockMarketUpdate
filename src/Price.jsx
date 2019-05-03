import React, {useState, useEffect} from 'react'
import api from './api'

export default function Price() {
    const [price, setPrice] = useState(0)

    useEffect(() => {
        api.get('stock/aapl/price')
        .then(response => {
            console.log(response)
            setPrice(response.data)
        })
    }, [])

    return (
       <div>
           <p>price: {price}</p>
       </div>    
    )
}