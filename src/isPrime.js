import React, { useState } from 'react'
import { checkPrime } from "./api.js"


const Index = () => {
    const [number, setNumber] = useState('')
    const [result, setResult] = useState("")
    const submit = async (e) => {
        try {
            e.preventDefault();

            let response = await checkPrime(parseFloat(number));

            if (response.status === 200) {
                setResult(`${parseFloat(number)} is ${response.data.isPrime === true ? "a" : "not a"} prime number`)

            }
            setNumber('')
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div>
            <h3>API 2</h3>
            <h1 style={{ display: result !== "" ? 'block' : 'none' }}>RESULT:- {result}</h1>
            <input
                type="number"
                name='number'
                placeholder='Number'
                onChange={event => setNumber(event.target.value)}
                value={number}
            />
            <br/>
            <br/>
            <button onClick={submit}>Submit</button>

        </div>
    )
}





export default Index
