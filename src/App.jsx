import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {

  const [token, setToken] = useState(null)


  return (
    <div className= "card">
     <SignUpForm setToken={setToken} token={token} />
     <Authenticate token={token} setToken={setToken} />
    </div>
  )
}

export default App
