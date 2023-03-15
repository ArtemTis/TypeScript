import { observer } from 'mobx-react'
import React from 'react'
import { checkboxStore } from './store/index'

const Checkbox = () => {
    return (
        <div>
            <input type="checkbox" onChange={() => checkboxStore.handlerCheck()} checked={checkboxStore.checked} />
        </div>
    )
}

export default observer(Checkbox)