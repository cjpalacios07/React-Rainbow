import React, { useState } from 'react'

// Set input for user selection
function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        //Utilizing add color funtion
        props.addColor(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

//Export component
export default ColorForm