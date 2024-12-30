import './EditableParagraph.css'
import React, { useState } from 'react';

const EditableParagraph = ({className, initialContent, updateContent}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialContent);

  const handleParagraphClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    setText(initialContent)
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updateContent(text)
      setIsEditing(false)
    }
  }

  return (
    <div className={`EditableParagraph ${className}`}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <p onClick={handleParagraphClick}>{text}</p>
      )}
    </div>
  );
};

export default EditableParagraph;