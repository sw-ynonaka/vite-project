import { useState } from 'react'
import { RecoilRoot } from 'recoil'

import './App.css'

import LogoMain from '../../components/Organisms/Logo/LogoMain'
import FormTest from '../../components/Organisms/FormTest/FormMain'
import AtomForm from '../../components/Organisms/AtomForm/AtomForm'

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
      </div>
      <FormTest />
      <RecoilRoot>
        <AtomForm />
      </RecoilRoot>
    </>
  )
}

export default Top
