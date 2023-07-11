import React from "react";
import { Button } from "react-bootstrap";

function Todo({index,todo,markTodo,removeTodo}){
    return(
        <div className="todo">
            <span style={{ textDecoration: todo.isDone ? "line-through":""}}>{todo.text}</span>
            <div>
                {
                    !todo.isDone ? 
                    <Button variant="outline-success" onClick={()=>markTodo(index)}>✓</Button>:
                   ""
                }
                
                <Button variant="outline-danger" onClick={()=>removeTodo(index)} ><span className="ml-1">✕</span></Button>
            </div>
        </div>
    )
}
export default Todo;