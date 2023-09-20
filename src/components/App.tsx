// store
import { RootState, useAppSelector } from "../store/store";

// components
import Book from "./Book";
import BooksList from "./BooksList";
import SearchBooks from "./SearchBooks";

// styles
import "../styles/App.css";

export default function App() {
  // state
  const isOpenBook = useAppSelector((state: RootState) => state.isOpenBook);

  return (
    <>
      <SearchBooks />
      <main>{isOpenBook ? <Book /> : <BooksList />}</main>
    </>
  );
}
