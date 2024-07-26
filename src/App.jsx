import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weatherinformations from './components/Weatherinformations/Weatherinformations'

function App() {
  const [weather, setWeather] = useState()
  const inputRef = useRef()


  async function searchCity(){
    const city = inputRef.current.value

    const key = "ca47ff4ed5b53d8598e9ae1db2b5a916"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const appInfo = await axios.get(url)
    setWeather(appInfo.data)
  
}

return (
  <div class='container-main'>
    <div> <h1> Previsão do Tempo </h1>
    <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
    <button onClick={searchCity}>Buscar</button></div>

    <div class='container-more-info'>{ weather && <Weatherinformations weather={weather}/>}</div>
  </div>
  )
}

export default App
