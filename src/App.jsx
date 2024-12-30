import "./App.css";
import { useCallback, useReducer, createContext } from "react";
import Editor from "./components/Editor";
import List from "./components/List";
import Header from "./components/Header";
import { v4 as uuid } from "uuid";
import Exam from "./components/Exam";
import { mockData } from "./mockData";


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

export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()

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
      <TodoStateContext.Provider value={{todos}}>
        <TodoDispatchContext.Provider value={{addTodo, updateTodo, deleteTodo}}>
          <Editor/>
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
