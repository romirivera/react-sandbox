/* eslint-disable react/prop-types */
import './App.css';
import { useState } from 'react';

// <p onClick={}>Hola</p> es equivalente a
// React.createElement('p', {onClick: () => {}}, 'Hola')

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <li key={todo}>{todo}</li>;
      })}
    </ul>
  );
}

function TodoForm(props) {
  const [newTodo, setNewTodo] = useState('');

  return (
    <form>
      <label htmlFor='new-todo'>Nuevo pendiente (todo)</label>

      <input
        id='new-todo'
        type='text'
        value={newTodo}
        onChange={(event) => setNewTodo(event.currentTarget.value)}
      />

      <button
        type='submit'
        onClick={(event) => {
          event.preventDefault();

          props.onTodoCreado(newTodo);

          setNewTodo('');
        }}
      >
        crear
      </button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState(['enseñar react', 'abrazar a rasita', 'dormir']);

  return (
    <div>
      <TodoList todos={todos} />

      <TodoForm
        onTodoCreado={(newTodo) => {
          console.log('todo creado: ', newTodo);
          setTodos([...todos, newTodo]);
        }}
      />
    </div>
  );
}

export default App;
