import React, {useEffect} from 'react'
import todos from '../../store/todos'
import {observer} from "mobx-react-lite"
import './list.css'

export interface ITodoList {
  id: number
  title: string
  completed: boolean
}

const List = observer(() => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => todos.getTodos(json))
  },[])

  return (
    <ul className='list'>
      {
        todos.list.map((item: ITodoList) => (
          <li key={item.id} className='list__item'>
            <button onClick={() => todos.removeItem(item.id)}>x</button>
            <span>{item.title}</span>
            <input type='checkbox' checked={item.completed} onClick={() => todos.changeCompleted(item.id)}/>
          </li>
        ))
      }
    </ul>
  )
})

export default List;