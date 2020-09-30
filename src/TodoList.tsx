import React from "react";
import { useRecoilValue } from "recoil";
import todoAtomState from "./Recoil/atom";
import { ITodo } from "./Types";

const TodoList = () => {
  const todo = useRecoilValue<ITodo[]>(todoAtomState);
  return (
    <ul>
      {todo.map(val => <li>{val.name}</li> )}
    </ul>
  )
}

export default TodoList;