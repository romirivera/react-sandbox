import './App.css';
import { useState } from 'react';

// <p onClick={}>Hola</p> es equivalente a
// React.createElement('p', {onClick: () => {}}, 'Hola')

function App() {
  const [todos, setTodos] = useState(['enseñar react', 'abrazar a rasita', 'dormir']);

  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>

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

            console.log('todos antes: ', todos);

            setTodos([...todos, newTodo]);

            setNewTodo('');
          }}
        >
          crear
        </button>
      </form>
    </div>
  );
}

export default App;
