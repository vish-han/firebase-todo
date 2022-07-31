
import './App.css';
import React,{useState} from 'react'
import Footer from './Components/Footer';
import Title from './Components/Title';
import TODO from './Components/TODO';
import{doc,updateDoc,deleteDoc,collection,query,onSnapshot,} from 'firebase/firestore'
import {db} from './firebase'
import DisplayTodo from './Components/DisplayTodo';
function App() {
  const [todos,setTodos] =useState([]);
  React.useEffect(() =>{
    const q=query(collection(db,"todos"));
    const unsub=onSnapshot(q,(querySnapshot)=>{
      let todosArray = [];
      querySnapshot.forEach((doc)=>{
        todosArray.push({...doc.data(),id:doc.id})
      })
      setTodos(todosArray)
    })
  return()=>unsub();
  },[])
  const handleEdit= async (todo,title) =>{
await updateDoc(doc(db,"todos",todo.id),{title:title})
  }
  const toggleComplete=async(todo)=>{
    await updateDoc(doc(db,"todos",todo.id),{
      completed:!todo.completed
    })
  }

  const handleDelete=async(id)=>{
 await deleteDoc(doc(db,"todos",id))
  }
  return (
    <div className="App">
   <div>
    <Title/>
   </div>
   <div>
<TODO/>
   </div>
   <div className="todo_container">
    {todos.map((todo)=>(
   <DisplayTodo
   key={todo.id}
   todo={todo}
   toggleComplete={toggleComplete}
   handleDelete={handleDelete}
   handleUpdate={handleEdit}
   />
      
    ))}
   </div>
   <Footer/>
    </div>
  );
}

export default App;
