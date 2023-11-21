
import { useState } from 'react';
import { useRecoilState } from 'recoil'
import * as atoms from './Atom'

function AtomForm() {
  const [inputValue, setInputValue] = useState('')
  const [addedValue, setAddedValue] = useRecoilState(atoms.addedValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onClick =() => {
    setAddedValue(inputValue)
    setInputValue('')
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="button" onClick={onClick}>登録</button>
      <p>登録値：{addedValue}</p>
    </div>
  )
}

export default AtomForm;
