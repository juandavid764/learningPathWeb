import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'

function App() {
  const [count, setCount] = useState(0)
  const [estudiantes, setEstudiantes] = useState([])

  useEffect(() => {
    async function getEstudiantes() {
      const { data: estudiantes } = await supabase.from('Estudiantes').select()

      if (estudiantes.length > 1) {
        setEstudiantes(estudiantes)
      }
    }

    getEstudiantes()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {estudiantes.map((estudiante) => (
        <h1 key={estudiante.id}>{estudiante.name}</h1>
      ))}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
