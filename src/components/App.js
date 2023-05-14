import React, { Component, useState } from 'react'
import './../styles/App.css'

function App() {
  const [isVisible, setVisible] = useState(false)
  return (
    <div id="main">
      <button onClick={() => setVisible(true)} id="click">
        Click Me
      </button>
      {isVisible ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  )
}

export default App
