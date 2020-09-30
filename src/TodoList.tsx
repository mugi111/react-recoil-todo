import React from "react";
import {
  useRecoilState,
} from "recoil";
import todoAtomState from "./Recoil/atom";

const TodoList = () => {
  const [todo, ] = useRecoilState<string>(todoAtomState);
  return (
    <>
      <span style={{ display: "block" }}>{todo}</span>
    </>
  )
}

export default TodoList;