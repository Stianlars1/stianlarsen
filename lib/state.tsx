"use client";
import { create } from "zustand";

export type Store = {
  isAnimationLoading: boolean;
  setIsAnimationLoadingFalse: () => void;
};

export const useStore = create<Store>()((set) => ({
  isAnimationLoading: true,
  setIsAnimationLoadingFalse: () =>
    set((state) => ({ isAnimationLoading: false })),
}));
