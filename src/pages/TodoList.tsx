import {  useState  } from 'react'
import { Link } from 'react-router-dom';

function TodoList() {
    const [newTodo, setNewTodo] = useState<string>('')
  const [todos, setTodo] = useState([
    {id: '1', text: 'Learning more about backend'},
    {id: '2', text: 'Taking my dog on a walk'},
    {id: '3', text: 'Work on more projects'},
  ])

  function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }  
  
  const handleDeleteClick = (id: string) => {
    const removeItem = todos.filter((todos) => {
      return todos.id !== id 
    })
    setTodo(removeItem)
  }
  
  
  const handleNewTodo = () => {
    setTodo([...todos, {id: generateRandomString(5),text: newTodo}])
    setNewTodo('')
  }

  return (
    <div className='app'>
    <div className='todo-list'>

        <h2 className='header'>Max's TodoList</h2>

        {todos.map((todo, i) => {
         return <p key={i}>{todo.text}</p>
        })}

        <input type="text" placeholder='Whats going on today' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      
        <button onClick={handleNewTodo} className='add-todo-text'>Add todo</button>

       <ul className='hello'>
        {todos.map((todo) => (
          <li key={todo.id} className='delete-todo'>
            {todo.text} <button onClick={() => handleDeleteClick(todo.id)} className='delete-button-text'>Delete</button>
          </li>
        ))}
       </ul>
       <Link to="/Register">Back</Link>

    </div>
  </div>
)
}

export default TodoList