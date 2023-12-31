
import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from  './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <React.Fragment>
    <TodoCounter completed={8} total={20} />
      <TodoSearch />

      <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      </TodoList>

     <CreateTodoButton />
     
     </React.Fragment>
  );
}


export default App;

