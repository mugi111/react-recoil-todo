import React from "react";
import { useRecoilValue } from "recoil";
import todoAtomState from "./Recoil/atom";

const TodoList = () => {
  const todo = useRecoilValue<string[]>(todoAtomState);
  return (
    <ul>
      {todo.map(val => {
        return (
          <li>{val}</li>
        )
      })}
    </ul>
  )
}

export default TodoList;