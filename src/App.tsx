import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import TodoList from './pages/TodoList';
import Welcome from './pages/Welcome';
import Register from './pages/Register';


function App() {


  return (
  <div>
    <Routes>
      <Route path='/' element={<Navigate to='/Welcome'/>}></Route>
      <Route path='/Welcome' element={<Welcome/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/TodoList' element={<TodoList/>}></Route>
    </Routes>
  </div>
  )
}

export default App