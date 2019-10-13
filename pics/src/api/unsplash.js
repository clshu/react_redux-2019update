import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9efbc3317205ea55b3f2aa35002fd8f5e7b047083ffc409d169aa23bf80cf4cf' 
    }
})