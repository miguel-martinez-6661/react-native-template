import { create } from "zustand";

interface LionState {
  lions: number;
  addLion: () => void;
  subLion: () => void;
}

const addLion = (state: LionState) => ({
  lions: state.lions + 1,
});

const subLion = (state: LionState) => {
  if (state.lions > 0) {
    return { lions: state.lions - 1 };
  }
  return state;
};

export const useLionStore = create<LionState>((set) => ({
  lions: 0,
  addLion: () => set(addLion),
  subLion: () => set(subLion),
}));
