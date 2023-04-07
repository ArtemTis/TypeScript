import React, {FC} from 'react'
import {Booking} from '../types/types'

interface WrapProps<T> {
    booking: T[];
    renderTable: (item: T) => React.ReactNode;
}

function Wrapper<T, Props> ({booking, renderTable}: WrapProps<T>) {
  return (
    <div>
        {booking.map(renderTable)}
    </div>
  )
}

export default Wrapper