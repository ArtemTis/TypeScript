import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void; 
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
    return (
        <div onClick={() => onClick(user)} style={{ padding: '15px', border: 'solid 1px gray' }}>
            {user.id}. {user.name} проживает в городе {user.address.city} по адресу {user.address.street}
        </div>
    )
}

export default UserItem