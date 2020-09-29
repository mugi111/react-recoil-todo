import React from "react";
import {
  useRecoilState,
} from "recoil";
import todoAtomState from "./Recoil/atom";

const InputForm = () => {
  const [, setTodo] = useRecoilState<string>(todoAtomState);
  return (
    <>
      <input onChange={(val) => setTodo(val.target.value)}></input>
    </>
  )
}

export default Input;