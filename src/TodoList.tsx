import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import todoAtomState from "./Recoil/atom";
import { ITodo } from "./Types";

const TodoList = () => {
  const todo: ITodo[] = useRecoilValue<ITodo[]>(todoAtomState);
  const setTodo = useSetRecoilState<ITodo[]>(todoAtomState);

  const statusChanged = (targetVal: ITodo) => {
    const index = todo.findIndex((item: ITodo) => item === targetVal)
    const newTodo: ITodo = { ...todo[index], finished: !targetVal.finished };
    
    setTodo([...todo.slice(0, index), newTodo, ...todo.slice(index + 1)]);
  }

  return (
    <ul style={{listStyle: "none"}}>
      {todo.map(val => {
        return (
          <li>
            <input type="checkbox" onChange={()=>statusChanged(val)}></input>
            <span style={val.finished?{textDecoration: "line-through"}:{textDecoration: "none"}}>{val.name}</span>
          </li> 
        )
      })}
    </ul>
  )
}

export default TodoList;