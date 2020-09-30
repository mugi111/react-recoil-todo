import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import todoAtomState from "./Recoil/atom";

const InputForm = () => {
  const [state, setState] = useState<string>("");
  const setTodo = useSetRecoilState<string[]>(todoAtomState);
  return (
    <>
      <input onChange={(val) => setState(val.target.value)}></input>
      <button onClick={() => setTodo((oldState) => [...oldState, state])}>Add</button>
    </>
  )
}

export default InputForm;