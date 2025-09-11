import React, { useState } from 'react'
import '../App.css';


function TodoCreate({addNewTodo}) {

    const [value, setValue] = useState("");

    const todoCreate = () =>{

        if(!value){
            return 0;
        }

        const request = {
            id: Math.floor(Math.random() * 999999999),
            task: value
        }

        addNewTodo(request);
        setValue("");
    }

    return (
        <div>
            <div className='todo-create'>

                <input value={value}  onChange={(e)=> setValue(e.target.value)}
                className='get-todo' type="text" placeholder='Bir todo giriniz' />

                <button onClick={todoCreate} className='add-todo' >Todo Ekle</button>
            </div>
        </div>
    )
}

export default TodoCreate