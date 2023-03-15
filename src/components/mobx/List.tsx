import React, { useEffect } from 'react'
import { listStore } from './store/index'

const List = () => {
    useEffect(() => {
        listStore.loadList()
    }, [])

    return (
        <div>
            {listStore.list.map(item => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div>
    )
}

export default List