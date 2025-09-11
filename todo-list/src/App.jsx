import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import ShowTodo from './components/ShowTodo';

function App() {

  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo])

    // ...todo demek ilk elemanı todo dizisinin 0. indeksine ata ikinci elamanı dizinin 1. indeksine ata üçüncü elemanı dizinin 2. indeksine ata gib gibi dizideki tüm elemanları sıryala indekslere atıyor. Virgülden koyup bir deger yazarsak ise yazdıgımız degeri dizinin en sonuna ekliyor
  }

  const removeTodo = (todoId)=>{
    setTodo([...todo.filter((gorev) => gorev.id != todoId)]);

    // bunun anlamı şu todo dizisi üzerinde "gorev" degişkeni ile gez paramtere ile gelen id ile dizideki todoların idlerini karşılaştır sonra bu idler eşit ise o todoyu diziden çıkart
  }

  const editTodo = (editTodo)=>{
    const updatedTodo = todo.map((gorev)=>{

      if(gorev.id != editTodo.id){  //update edecegimiz todoyu id si ile yakalamaya çalışıyoruz geri kalanları değiştirmeden aynı şekilde geri dönüyoruz. Yeni oluşan diziyi updatedTodo ya atıyoruz
        return gorev;
      }
      else{
        return editTodo;
      }
    })

    setTodo([...updatedTodo]);
  }

  return (
    <div>
      <TodoCreate addNewTodo={addTodo} />
      <ShowTodo todolar={todo} RemoveTodo = {removeTodo} onEditTodo ={editTodo} />
    </div>
  )
}

export default App
