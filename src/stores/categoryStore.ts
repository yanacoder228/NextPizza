import { create } from "zustand";

interface CategoryState {
  activeId: number;
  setActiveId: (activeId: number) => void;
}

export const useCategoryStory = create<CategoryState>((set) => ({
  activeId: 1,
  setActiveId: (id) => set({ activeId: id }),
}));
