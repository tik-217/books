import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { IBooksData, IBooksItems } from "../types";

const reducer = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooksData: (state, actions: PayloadAction<IBooksData>) => {
      state.booksData = actions.payload;
    },
    setBooksItems: (state, actions: PayloadAction<IBooksItems[]>) => {
      state.booksItems = actions.payload;
    },
    setSearchText(state, actions: PayloadAction<string>) {
      state.searchText = actions.payload;
    },
    setLoading(state, actions: PayloadAction<boolean>) {
      state.loading = actions.payload;
    },
    setSuccess(state, actions: PayloadAction<boolean>) {
      state.success = actions.payload;
    },
    setBookItem(state, actions: PayloadAction<IBooksItems>) {
      state.bookItem = actions.payload;
    },
    setIsOpenBook(state, actions: PayloadAction<boolean>) {
      state.isOpenBook = actions.payload;
    },
    setCategories(state, actions: PayloadAction<string>) {
      state.categories = actions.payload;
    },
    setSorting(state, actions: PayloadAction<string>) {
      state.sorting = actions.payload;
    },
  },
});

export const {
  setBooksData,
  setBooksItems,
  setSearchText,
  setLoading,
  setSuccess,
  setBookItem,
  setIsOpenBook,
  setCategories,
  setSorting,
} = reducer.actions;

export default reducer.reducer;
