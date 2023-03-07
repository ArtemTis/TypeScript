import React, { FC, useState, useEffect } from 'react'
import { ITodo } from '../types/types'
import axios from "axios";
import List from './List';
import TodoItem from './TodoItem';
import { useNavigate } from 'react-router-dom';

const TodosPage: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    const history = useNavigate();

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem
             onClick={(todo) => history('/todos/' + todo.id)}
              todo={todo} key={todo.id}/>}/>
    )
}

export default TodosPage