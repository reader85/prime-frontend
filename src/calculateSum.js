import React, { useState } from 'react'
import { checkSumAndCheckPrime } from "./api.js"
const CalculateSum = () => {


    const [formFields, setFormFields] = useState([
        { number: '' },
    ])
    const [result, setResult] = useState("")
    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }

    const submit = async (e) => {
        try {
            e.preventDefault();
            let arr = []
            formFields.map((ar) => {
                arr.push(parseInt(ar.number))
            })
            let response = await checkSumAndCheckPrime(arr);
            if (response.status === 200) {
                setResult(`Sum is ${response.data.result} and this is ${response.data.isPrime === true ? "a" : "not a"} prime number`)
            }

        } catch (error) {
            console.log(error)
        }

    }

    const addFields = () => {
        let object = {
            number: ''
        }
        setFormFields([...formFields, object])
    }

    const clearFields = () => {
        let object = {
            number: ''
        }
        setFormFields([object])
        setResult("")
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    return (
        <div className="App">

            <h3>API 1</h3>
            {formFields.map((form, index) => {
                return (
                    <div key={index}>

                        <input
                            type="number"
                            name='number'
                            placeholder='Number'
                            onChange={event => handleFormChange(event, index)}
                            value={form.number}
                        />

                        <button onClick={() => removeFields(index)}>Remove</button>
                    </div>
                )
            })}
            <br />
            <br />

            <button onClick={addFields}>Add More..</button>
            <br />
            <br />
            <br />
            <button onClick={submit}>Submit</button>
            <br />
            <br />
            <h1 style={{ display: result !== "" ? 'block' : 'none' }}>RESULT: {result}</h1>

            <button onClick={clearFields}>Clear</button>

        </div>
    );
}

export default CalculateSum;