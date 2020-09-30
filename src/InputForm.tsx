import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import todoAtomState from "./Recoil/atom";

const InputForm = () => {
  const [val, setVal] = useState<string>("");
  const setTodo = useSetRecoilState<string[]>(todoAtomState);
  return (
    <>
      <input onChange={(val) => setVal(val.target.value)}></input>
      <button onClick={() => setTodo((oldState) => [...oldState, val])}>Add</button>
    </>
  )
}

export default InputForm;