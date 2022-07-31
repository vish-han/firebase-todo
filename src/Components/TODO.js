import React,{useState} from 'react'
import {db} from '../firebase'
import { addDoc,collection } from 'firebase/firestore'

const TODO = () => {

    const [title,setTitle]=useState("")
    const handleSubmit=async (e)=>{
e.preventDefault();
if(title!=""){
   await addDoc(collection(db,"todo"),{title,
    completed:false,
})
setTitle("");
}
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="input_container">
            <input
            type="text"
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
            placeholder="Add your Daily Todos"
            />
            </div>
            <div className="btn_container">
             <button> Add</button>  
            </div>
        
    </form>
  )
}

export default TODO