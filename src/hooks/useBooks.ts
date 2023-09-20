// react-qeury
import { useQuery } from "react-query";

// api
import { booksSearch } from "../api/books";

// store
import { RootState, useAppSelector } from "../store/store";

// types
import { IUseBooksFuncArgs } from "../types";

export default function useBooks({
  onBtn = false,
  searchText,
  categories,
  sorting,
  paginStart = 0,
  totalItems,
}: IUseBooksFuncArgs) {
  const isOpenBook = useAppSelector((state: RootState) => state.isOpenBook);

  const {
    data: books,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery(
    ["books", searchText, categories, sorting],
    () => booksSearch(searchText, categories, sorting, paginStart, totalItems),
    {
      enabled: !!searchText && !isOpenBook,
      keepPreviousData: onBtn,
    }
  );

  return {
    books,
    isLoading,
    isSuccess,
    isError,
    error,
  };
}
