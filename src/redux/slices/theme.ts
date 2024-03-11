import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../../utility/hooks/useLocalStorage";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { getItem, setItem } = useLocalStorage<string>("@with-redux:theme");

export const theme = createSlice({
  name: "theme",
  initialState: {
    currentTheme: getItem() || "light"
  },
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload.theme;
      setItem(action.payload.theme);
    },
  }
});

export const { setTheme } = theme.actions;
export default theme.reducer;