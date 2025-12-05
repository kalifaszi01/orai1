//Készíts egy React alkalmazást, amelynek az oldal közepén egy kék színű gomb van és a címkéjén az a szám látható, hogy hányszor kattintottak a gombra
import './App.css'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }


  return (
    <>
    
    <div className="container">
      <h1> Kék Gomb</h1>
      <button
        className="kattintas"
        title={`Kattintások száma: ${count}`}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
    </>
  )
}

export default App
