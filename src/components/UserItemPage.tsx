import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types';
import axios from "axios";
import { useParams, Params, useNavigate} from "react-router-dom";

interface UserItemPageParams extends Params {
    id: string;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);

    const params = useParams<UserItemPageParams>()

    const history = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <button onClick={() => history('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
                <hr/>
                {user?.address?.city} {user?.address?.street} {user?.address?.zipcode}
            </div>
        </div>
    )
}

export default UserItemPage