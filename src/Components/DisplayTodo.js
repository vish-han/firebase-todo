import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'


const DisplayTodo = ({todo,
toggleComplete,
handleUpdate,
handleDelete,}) => {
  const [newTitle,setNewTitle] =React.useState(todo.title)
  const handleChange = (e) => {
    e.preventDefault();
     if(todo.completed===true) {
      setNewTitle(todo.title)
     }
    else{
      todo.title=""
      setNewTitle(e.target.value);
    }
  }
  return (
    <div className="todo">
        <input
        type="text"
        className="list"
        value={todo.title===""?newTitle:todo.title}
        style={{textDecoration:todo.completed&&"line-through"}}
        onChange={handleChange}
        />
    <button className="button-complete"
    onClick={() =>toggleComplete(todo)}>
<CheckCircleIcon id="i"/>
    </button>
    <button className="button-edit"
    onClick={()=>handleUpdate(todo,newTitle)}>
<EditIcon id="i"/>
    </button>
    <button className="button-deleted"
    onClick={()=>handleDelete(todo.id)}>
<DeleteIcon id="i"/>
    </button>

    </div>
    
  )
}

export default DisplayTodo