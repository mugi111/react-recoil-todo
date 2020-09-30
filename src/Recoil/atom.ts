import { atom } from 'recoil';
import { ITodo } from '../Types';

const todoAtomState = atom<ITodo[]>({
    key: "todoAtom",
    default: [],
  });

export default todoAtomState;