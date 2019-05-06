import axios from 'axios'

export default axios.create({
    baseURL: 'https://sandbox.iexapis.com/stable',
    params: {
        token: 'Tpk_2596d5035d964c71a66255c363ec1e3d'
    }
})
