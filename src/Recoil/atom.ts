import { ITodo } from '../Types';
import { atom } from 'recoil';

const todoAtomState = atom<ITodo[]>({
    key: "todoAtom",
    default: [],
  });

export default todoAtomState;