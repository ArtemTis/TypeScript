import React, { FC, useState, useEffect } from 'react'
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const UserPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const history = useNavigate();

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <List items={users}
            renderItem={(user: IUser) => <UserItem
                onClick={(user) => history('/users/' + user.id)}
                user={user} key={user.id} />} />
    )
}

export default UserPage