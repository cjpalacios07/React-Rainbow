import React, { useState } from 'react'
// Import colorblock
import ColorBlock from './ColorBlock'
// Import colorform
import ColorForm from './ColorForm'

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
