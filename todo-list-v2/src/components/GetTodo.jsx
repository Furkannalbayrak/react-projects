import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo';

function GetTodo() {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        const veri = JSON.parse(localStorage.getItem("todos"));
        if(veri){
            setTodos(veri);  
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = ()=>{
        if(!input){
            return 0;
        }

        const newTodo = {
            text: input,
            checked: false
        }

        setTodos([...todos, newTodo]);
        setInput("");
    }

    const removeTodo = (id) => {
        const updatedTodos = todos.filter((_, index) => index !== id);
        setTodos(updatedTodos);
    }

    const toggleCheck = (id) => {
        const updatedTodos = todos.map((todo, index) =>
            index === id ? { ...todo, checked: !todo.checked } : todo
        );
        setTodos(updatedTodos);
    };

  return (
    <div>
        <div className='container'>
            <input type="text" className='getTodo' placeholder='Todo Giriniz' onChange={(e)=> setInput(e.target.value)} value={input} />
            <button onClick={addTodo} className='addTodo' >Todo Ekleyin</button>
        </div>

        <div style={{marginTop: "60px"}}>
            {
                todos.map((todo, index)=>(
                    <AddTodo todo={todo} toggleCheck={()=> toggleCheck(index)} removeTodo={()=> removeTodo(index)}  key={index} />
                ))
            }
        </div>
    </div>
  )
}

export default GetTodo