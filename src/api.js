import axios from "axios"
// import dotenv from 'dotenv'
// dotenv.config()

let serverUrl = process.env.REACT_APP_SERVER_URL

export const checkSumAndCheckPrime = async (numbers) => {
    let res = null
    try {
        res = await axios.post(`${serverUrl}/api/sumAndCheckPrime`, {
            numbers: numbers
        });
        return res
    } catch (err) {
        console.log(err)
    }
}

export const checkPrime = async (number) => {
    let res = null
    try {
        res = await axios.get(`${serverUrl}/api/checkPrime/${number}`);
        return res
    } catch (err) {
        console.log(err)
    }
}