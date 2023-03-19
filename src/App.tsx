import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { ITodo, IUser, ITable } from './types/types';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';
import Table from './components/table/Table';
import Checkbox from './components/mobx/Checkbox';
import Input from './components/mobx/Input';
import List from './components/mobx/List';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  let mounth: number[] = [];
  for (let i = 0; i < 30; i++) {
    mounth.push(i + 1)
  }

  let time: string[] = [];
  for (let i = 0; i < 24; i++) {
    if (i < 10) {
      time.push(`0${i}:00`)
    } else {
      time.push(`${i}:00`)
    }
  }

  const [transpose, setTranspose] = useState<ITable>({ rows: mounth, columns: time });
  let flip = useRef<boolean>(true);

  const transposeHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {

    if (flip.current) {
      setTranspose(() => {
        return {
          rows: time,
          columns: mounth
        }
      })
      flip.current = false;
    } else {
      setTranspose(() => {
        return {
          rows: mounth,
          columns: time
        }
      })
      flip.current = true;
    }
  }

  let arrTable = [
    [...time],
    [mounth[0], 0]
  ]
  console.log(transpose);

  return (
    <div className="App" >
   
    </div>
  );
}

export default App;
