import { useRef, useState, userRef } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()


function searchCity(){
  console.log(inputRef.current.valor)
  const city = inputRef.current.value
  const key = "ca47ff4ed5b53d8598e9ae1db2b5a916"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  const data = axios.get(url)
}

return (
  <div>
  <h1> Previsão do tempo-react</h1>
  <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
  <button onClick={searchCity}>Buscar</button>
  </div>
  )
}

export default App
