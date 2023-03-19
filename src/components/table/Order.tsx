import React from 'react'
import {formStore} from '../mobx/store/store'

const Order = () => {
  return (
    <div>
        <input type="text" placeholder='location'/>
        <input type="text" placeholder='game'/>
        <input type="text" placeholder='quantity'/>
    </div>
  )
}

export default Order