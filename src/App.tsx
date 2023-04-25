import { useState } from 'react'
import './App.css'
import { useTicker } from './hooks/ticker'

function App() {
  const [int, setInt] = useState(1000)

  const [num, stop, start] = useTicker(int)

  return (
    <>
      <h2>This is a Ticker: {num}</h2>
      <p>Current Speed: {(1000/int).toFixed(2)} / sec</p>
      <p>
        <button onClick={() => setInt(Math.max(Math.floor(int/2), 50))}>Speed up</button>
        <button onClick={() => setInt(int+500)}>Speed down</button>
        <button onClick={stop}>Stop</button>
        <button onClick={start}>Start</button>
      </p>
    </>
  )
}

export default App
