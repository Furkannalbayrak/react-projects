import React, { useState } from 'react'
import '../App.css';
import { RiCloseLargeFill } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";


function TodoList({oneTodo, RemoveTodo, onEditTodo}) {

    const [control, setControl] = useState(false);
    const [editTodo, setEditTodo] = useState(oneTodo.task);

    const remove = (e)=>{
        e.stopPropagation(); // Prevent event bubbling
        if (window.confirm('Bu görevi silmek istediğinizden emin misiniz?')) {
            RemoveTodo(oneTodo.id);
        }
    }

    const updateTodo = ()=>{

        const request = {
            id: oneTodo.id,
            task: editTodo
        }
        onEditTodo(request);
        setControl(false);
    }

    return (
        <div className='todolist'>
            <p className="input-wrapper">
                {
                    control ? <input value={editTodo}  onChange={(e)=> setEditTodo(e.target.value)} type="text" className='newInput' /> : oneTodo.task 
                }
            </p>
            <div className='icons'>
                <RiCloseLargeFill onClick={remove} className={control ? 'disabled-icon' : ''} />
                {
                    control ? (
                        <FaCheck onClick={(e) => {
                            e.stopPropagation();
                            updateTodo();
                        }} />
                    ) : (
                        <LiaEdit onClick={(e) => {
                            e.stopPropagation();
                            setControl(true);
                        }} />
                    )
                }
            </div>
        </div >
    )
}

export default TodoList