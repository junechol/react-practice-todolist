import "./App.css";
import { useCallback, useReducer, useState } from "react";
import Editor from "./components/Editor";
import List from "./components/List";
import Header from "./components/Header";
import { v4 as uuid } from "uuid";
import Exam from "./components/Exam";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": return [action.data, ...state]
    case "UPDATE": 
      return state.map((t) => (t.id === action.data.id ? action.data : t))
    case "DELETE":
      return state.filter((t)=> (t.id !== action.data.id))
    default: return state
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)

  const addTodo = useCallback((content) => 
    dispatch({
      type: "ADD",
      data: {
            id: uuid(),
            isDone: false,
            content,
            date: new Date().getTime(),
          },
    }), [])

  const updateTodo = useCallback((todo) => 
    dispatch({
      type: "UPDATE",
      data: todo
    }), [])


  const deleteTodo = useCallback((todo) => 
    dispatch({
      type: "DELETE",
      data: todo
    }), [])

  return (
    <div className="App">
      <Header />
      <Editor addTodo={addTodo} />
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
