import React,{useState} from 'react'
import './App.css';
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./components/Todo";
import FormTodo  from './components/FormTodo';

function App() {
  const [todos,setTodos] = useState([{
    text:"This is simple todo",
    isDone:false
  }])
  const addTodo = text => {
    const newTodos = [...todos,{text,isDone:false}]
    setTodos(newTodos)
  }

  const markTodo = (index) =>{
    const newTodos = [...todos]
    newTodos[index].isDone = true;
    setTodos(newTodos)
  }

  const removeTodo = (index)=>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className='container'>
        <h1 className='text-center mb-4'>Todo List</h1>
        <FormTodo addTodo={addTodo}></FormTodo>
        <div>
          {
            todos.map((todo,index)=>(
              <Card>
                <Card.Body>
                  <Todo key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo}></Todo>
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
