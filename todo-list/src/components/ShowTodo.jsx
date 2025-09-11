import React from 'react'
import TodoList from './TodoList'

function ShowTodo({todolar, RemoveTodo, onEditTodo}) {
    return (
        <div>
            {
                todolar && todolar.map((gorev, index)=>(  // (todolar &&) demek todolar arreyinde deger varsa anlamına geliyor
                    <TodoList  key={index} oneTodo={gorev} RemoveTodo={RemoveTodo} onEditTodo={onEditTodo} />
                ))
            }
        </div>
    )
}

export default ShowTodo