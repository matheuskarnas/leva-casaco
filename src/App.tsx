import { useState } from 'react'
import './App.css'
import { GetCity } from './Components/GetCity'

function App() {
  const [city, setCity] = useState<string>()

  let timer: ReturnType<typeof setTimeout>

  const newFindName = (value: string) => {
    if (timer !== undefined) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      setCity(value)
    }, 1500)
  }

  return (
    <div className="App">
      <div className="Title">
        <h1>Leva Casaco? </h1>
      </div>
      <form>
        <input
          type="text"
          placeholder='Escreva o nome de uma cidade'
          onChange={(e) => newFindName(e.target.value)}
        />
      </form>
      {city && <GetCity name={city} />}
    </div >
  )
}

export default App
