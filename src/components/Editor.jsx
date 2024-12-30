import './Editor.css';
import { useState, useRef, memo} from 'react';

const Editor = ({addTodo}) => {
    const [newContent, setNewContent] = useState('');
    const contentRef = useRef();

    const handleAddButton = () => {
        if (newContent.trim() === '') {
            contentRef.current.focus();
            return;
        }
        addTodo(newContent);
        setNewContent('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddButton();
        }
    }

    return (
        <div className="Editor">
            <input 
                ref={contentRef}
                placeholder="새로운 Todo..."
                value={newContent}
                onChange={(e)=>setNewContent(e.target.value)}
                onKeyDown={handleKeyDown}
                />
            <button onClick={handleAddButton}>추가</button>
        </div>
    );
}

export default memo(Editor);