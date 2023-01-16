import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: { to_do: ["a", "d"], doing: ["b", "c"], done: ["e", "f"] },
});
