import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.0.25:3333'
});


export const busca = async(url : string,setData: any) => {
    const response = await api.get(url)
    setData(response.data)
}
