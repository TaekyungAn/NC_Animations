import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  // get: atom 값을 변형해서 보여주는 함수
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  // set: atom을 수정하는 함수
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    // set(수정하고 싶은 recoil atom, 새로운 값)
    set(minuteState, minutes);
  },
});
