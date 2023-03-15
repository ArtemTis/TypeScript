import { observer } from 'mobx-react'
import {inputStore} from './store/index'

const Input = () => {
  return (
    <div>
        <input type="text" onChange={(e) => inputStore.changeValue(e.target.value)} value={inputStore.value}/>
    </div>
  )
}

export default observer(Input)