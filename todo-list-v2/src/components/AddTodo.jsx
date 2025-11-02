import React, { use, useState } from 'react'
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


function AddTodo({ todo, toggleCheck, removeTodo }) {
    return (
        <div className='todoList-parent'>
            <div className='todoList'>
                <div>
                    {todo.text}
                </div>

                <div className='icons'>
                    {
                        todo.checked
                            ? <MdOutlineRadioButtonUnchecked className="notCheck" onClick={toggleCheck} />
                            : <MdOutlineRadioButtonUnchecked className="check" onClick={toggleCheck} />
                    }

                    <IoMdClose className="close" onClick={removeTodo} />
                </div>
            </div>
        </div>
    )
}

export default AddTodo