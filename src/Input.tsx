import React from "react";
import {
  useRecoilState,
} from "recoil";
import todoAtomState from "./Recoil/atom";

const Input = () => {
  const [todo, setTodo] = useRecoilState(todoAtomState);
  return (
    <>
      <input></input>
    </>
  )
}

export default Input;