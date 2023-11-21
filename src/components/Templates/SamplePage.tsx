import { useState } from 'react'
import './App.css'

import LogoMain from '../../components/Organisms/Logo/LogoMain'
import FormTest from '../../components/Organisms/FormTest/FormMain'

function Top() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LogoMain />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <FormTest />
      </div>
    </>
  )
}

export default Top
