import { create } from 'zustand'

interface BearState {
  bears: number
  addBear: () => void
  subBear: () => void
}

const addBear = (state: BearState) => ({
  bears: state.bears + 1
})

const subBear = (state: BearState) => {
  if (state.bears > 0) {
    return { bears: state.bears - 1 }
  }
  return state
}

export const useBearStore = create<BearState>(set => ({
  bears: 0,
  addBear: () => set(addBear),
  subBear: () => set(subBear)
}))
