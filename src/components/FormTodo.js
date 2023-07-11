import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";

function FormTodo({addTodo}){
    const [value,setValue] = useState("");
    const handleSubmit = e =>{
        e.preventDefault();
        if(!value) return;
        addTodo(value)
        setValue("")
    }
    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>
                        <b>Todo</b>
                    </Form.Label>
                    <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Please enter some text" />
                </Form.Group>
                <Button variant="primary mb-3" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default FormTodo;