import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import todoAtomState from "./Recoil/atom";
import { ITodo } from "./Types";

const InputForm = () => {
  const [state, setState] = useState<string>("");
  const setTodo = useSetRecoilState<ITodo[]>(todoAtomState);
  return (
    <>
      <input onChange={(val) => setState(val.target.value)}></input>
      <button onClick={() => setTodo((oldState) => [...oldState, {name:state, finished:false}])}>Add</button>
    </>
  )
}

export default InputForm;