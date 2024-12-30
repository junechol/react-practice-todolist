import './TodoItem.css';
import { useState, memo, useContext } from 'react';
import EditableParagraph from './EditableParagraph';
import { TodoContext } from '../App';

const TodoItem = ({ todo }) => {
  const {updateTodo, deleteTodo} = useContext(TodoContext)
  const [currentTodo, setCurrentTodo] = useState(todo)

  const updateIsDone = (e) => {
    const newTodo = {
      ...currentTodo,
      isDone: e.target.checked
    }
    setCurrentTodo(newTodo)
    updateTodo(newTodo)
  }

  const updateContent = (newContent) => {
    const newTodo = {
      ...currentTodo,
      content: newContent
    }
    setCurrentTodo(newTodo)
    updateTodo(newTodo)
  }

  return (
    <div className="TodoItem">
      <input type="checkbox" 
        checked={currentTodo.isDone} 
        onChange={updateIsDone}
        />
      <EditableParagraph className='content' 
        initialContent={todo.content} 
        updateContent={updateContent}/>
      <div className='date'>{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={()=>deleteTodo(currentTodo)}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);