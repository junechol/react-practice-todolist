import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const {todos} = useContext(TodoStateContext)
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const getFilteredTodos = () => {
    if (searchText === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  // const getAnalyzedData = 

  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    const totalCount = todos.length
    const doneCount = todos.filter(t=>t.isDone).length
    const notDoneCount = totalCount - doneCount

    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }, [todos])
  
  // const {totalCount, doneCount, notDoneCount} = getAnalyzedData()

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        placeholder="검색어를 입력하세요."
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <div className="todos-wrapper">
        {getFilteredTodos().map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
