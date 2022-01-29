import React, { useState } from 'react'
// Import colorblock
import ColorBlock from './ColorBlock'
// Import colorform
import ColorForm from './ColorForm'

//Implementing State
function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })
    //Spred operator
    let addColor = (newColor) => {
      setColors([...colors, newColor])
    }
    
    return (
      <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/>
    </div>
  )}


export default App
