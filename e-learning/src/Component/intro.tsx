import { useState } from 'react'
import '../App.css'

function App() {

  const [name, setName] = useState("DUC");

  return (
    <>
      <div>
         Hello from {name} e_learning
         <br></br>
         <input type="text" placeholder="Enter something..." onChange={(e) => setName(e.target.value)} />
      </div>
      
    </>
  )
}

export default App
