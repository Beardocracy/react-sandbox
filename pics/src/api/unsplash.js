import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JQTrD5cE-z6s2LT-AD1EzpTltTcIoOKgXwJiWCSb7fc'
    }
});