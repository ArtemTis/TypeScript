import React, { FC, useState, useEffect } from 'react'
import { Params, useNavigate, useParams } from 'react-router-dom'
import { ITodo } from '../types/types';
import axios from "axios";

interface TodosPageParams extends Params {
    id: string;
}

const TodoItemPage: FC = () => {

    const [todo, setTodo] = useState<ITodo | null>(null);

    const param = useParams<TodosPageParams>()

    const navigate = useNavigate();

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + param.id); //?_limit=10
            setTodo(response.data);
        } catch (e) {
            console.error(e);
        }
    }
    
    return (
        <div>
             <button onClick={() => navigate('/todos')}>Back</button>
            <h1>Страница Задачи {todo?.title}</h1>
            <div>
                {todo?.completed 
                ? <h2>Выполнено!</h2>
                : <h2>Не выполнено</h2>}
            </div>
        </div>
    )
}

export default TodoItemPage