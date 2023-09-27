import axios from "axios";
import { create } from "zustand";

export const useDishesStore = create((set) => ({
  dishes: [],
  loading: false,
  error: "",

  fetchDishes: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("http://207.154.221.44:4002/api/dishes");
      set({ dishes: res.data.data.data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
