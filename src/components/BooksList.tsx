// react
import { useEffect, useState } from "react";

// store
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import {
  setBooksData,
  setBooksItems,
  setBookItem,
  setIsOpenBook,
} from "../store/toolkiitSlice";

// services
import { isAuthor, isCategories, descLength } from "../services/BooksList";

// types
import { IBooksItems } from "../types";

// hooks
import useBooks from "../hooks/useBooks";

// styles
import { Button, Spin } from "antd";
import "../styles/BooksList.css";

export default function BooksList() {
  // state
  const [, setPage] = useState(0);
  const [onBtn, setOnBtn] = useState(false);
  const booksItemsArr = useAppSelector((state: RootState) => state.booksItems);
  const loadingBooks = useAppSelector((store: RootState) => store.loading);
  const successBooks = useAppSelector((store: RootState) => store.success);
  const booksApi = useAppSelector((store: RootState) => store.booksData);
  const categories = useAppSelector((state: RootState) => state.categories);
  const searchText = useAppSelector((state: RootState) => state.searchText);
  const sorting = useAppSelector((state: RootState) => state.sorting);
  const dispatch = useAppDispatch();

  const { books, isSuccess, isError, error } = useBooks({
    onBtn,
    searchText,
    categories,
    sorting,
  });

  useEffect(() => {
    if (!onBtn) return;
    if (books?.data.items) {
      isSuccess && dispatch(setBooksData(books?.data));
      isSuccess &&
        dispatch(setBooksItems([...booksItemsArr, ...books?.data.items]));
    }

    setOnBtn(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onBtn]);

  useEffect(() => {
    if (books?.data.items) {
      dispatch(setBooksItems([...books?.data.items]));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting]);

  if (isError) {
    console.log(error);
    return (
      <>
        <div className="error">
          <h3>{(error as any).message}</h3>
          <h5>{(error as any).name}</h5>
          <code>{(error as any).code}</code>
        </div>
      </>
    );
  }

  function loadMore() {
    setOnBtn(true);
    setPage((page) => page + 30);
  }

  function bookHandler(book: IBooksItems) {
    dispatch(setIsOpenBook(true));
    dispatch(setBookItem(book));
  }

  return (
    <div className="books">
      {loadingBooks && (
        <div className="spin">
          <Spin />
        </div>
      )}
      {!loadingBooks && successBooks && booksApi.items && (
        <>
          <h5>{booksApi.totalItems} results</h5>
          <div className="books__list">
            {booksItemsArr.map((el: IBooksItems, i) => (
              <section key={el.id + i} onClick={() => bookHandler(el)}>
                <img
                  src={
                    el.volumeInfo.imageLinks &&
                    el.volumeInfo.imageLinks.thumbnail
                  }
                  alt="card-book"
                />
                <div className="books__list_descriptions">
                  <span>{isCategories(el.volumeInfo.categories)}</span>
                  <p>{descLength(el.volumeInfo.description)}</p>
                  <span>{isAuthor(el.volumeInfo.authors)}</span>
                </div>
              </section>
            ))}
          </div>
          <div className="books_button">
            {booksApi.totalItems >= 30 && (
              <Button type="link" size={"large"} onClick={() => loadMore()}>
                Load more
              </Button>
            )}
          </div>
        </>
      )}
      {loadingBooks || (!successBooks && <p>Choose books</p>)}
    </div>
  );
}
