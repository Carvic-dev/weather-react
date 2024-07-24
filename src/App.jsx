import { useRef, useState, userRef } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()


  async function searchCity(){
  const city = inputRef.current.value

  const key = "ca47ff4ed5b53d8598e9ae1db2b5a916"

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

  const apiDataseWeather = await axios.get(url)
  setWeather(apiDataseWeather)
  
  

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
