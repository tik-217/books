// react
import { useEffect } from "react";

// styles
import { Space, Select } from "antd";
import "../styles/SearchBooks.css";

// store
import {
  setLoading,
  setBooksData,
  setBooksItems,
  setCategories,
  setSearchText,
  setSorting,
  setSuccess,
} from "../store/toolkiitSlice";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";

// services
import { Search, categoriesOpt, sortedOpt } from "../services/SearchBooks";

// hooks
import useBooks from "../hooks/useBooks";

export default function SearchBooks() {
  // state
  const searchText = useAppSelector((state: RootState) => state.searchText);
  const categories = useAppSelector((state: RootState) => state.categories);
  const sorting = useAppSelector((state: RootState) => state.sorting);
  const dispatch = useAppDispatch();

  const { books, isLoading, isSuccess } = useBooks({
    onBtn: false,
    searchText,
    categories,
    sorting,
  });

  useEffect(() => {
    dispatch(setLoading(isLoading));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setBooksData(books?.data));
      dispatch(setBooksItems(books?.data.items));
      dispatch(setSuccess(isSuccess));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  function sortHandler(sort: string) {
    dispatch(setSorting(sort));
  }

  function categHandler(text: string) {
    dispatch(setCategories(text));
  }

  function searchRequest(text: string) {
    if (text.length === 0) return;
    dispatch(setSearchText(text));
  }

  return (
    <header className="header">
      <h4>Search for books</h4>
      <form className="header__form">
        <div className="header__form_search">
          <Space direction="vertical">
            <Search
              placeholder="search book"
              onSearch={(text) => searchRequest(text)}
              enterButton
              size="large"
            />
          </Space>
        </div>
        <div className="header__form_categories">
          <p>Categories</p>
          <Space direction="vertical">
            <Select
              defaultValue="all"
              options={categoriesOpt}
              onSelect={(catText) => categHandler(catText)}
            />
          </Space>
        </div>
        <div className="header__form_sorted">
          <p>Sorted by</p>
          <Space direction="vertical">
            <Select
              defaultValue="relevance"
              options={sortedOpt}
              onSelect={(sortText) => sortHandler(sortText)}
            />
          </Space>
        </div>
      </form>
    </header>
  );
}
