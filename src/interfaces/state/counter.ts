import { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

export interface IncreaseCounter extends PayloadAction<number> {}
