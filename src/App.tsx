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
console.log(transpose);

  return (
    <div className="App" >
      {/* <EventsExample/>
      <Card width="200px" height="200px" variant={CardVariant.outlinde} clickFunc={(num) => console.log('click ' + num)
      } >
        <button>Btn</button>
      </Card> */}

      {/* <UserList users={users}/> */}
      <button type='button' onClick={transposeHandler}>Transpose</button>
      <Table rows={mounth} columns={time} rowsCols={transpose}/>

      {/* <BrowserRouter>
        <div>
          <NavLink to={"/users"}>Пользователи</NavLink>
          <NavLink to={"/todos"}>Список дел</NavLink>

        </div>
        <Routes>
          <Route path={'/users'} element={<UserPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/todos/:id'} element={<TodoItemPage />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
