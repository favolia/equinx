// import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { create } from "zustand";

export const useAppStore = create()((set) => ({
    show: false,
    toggleShow: () => set((state) => ({ show: !state.show })),
}), shallow);