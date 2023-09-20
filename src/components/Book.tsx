// store
import { LeftCircleOutlined } from "@ant-design/icons";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { setIsOpenBook } from "../store/toolkiitSlice";

// styles
import "../styles/Book.css";

export default function Book() {
  // state
  const bookItem = useAppSelector((state: RootState) => state.bookItem);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="bookItem">
        <div className="booksItem_arrowPrev">
          <LeftCircleOutlined
            twoToneColor="#eb2f96"
            style={{ fontSize: "30px" }}
            onClick={() => dispatch(setIsOpenBook(false))}
          />
        </div>
        <div className="bookItem__image">
          <img src={bookItem.volumeInfo.imageLinks.thumbnail} alt="book" />
        </div>
        <div className="bookItem__list">
          <span>{bookItem.volumeInfo.categories}</span>
          <p>{bookItem.volumeInfo.title}</p>
          <p className="bookItem__list_description">
            {bookItem.volumeInfo.description}
          </p>
          <span>{bookItem.volumeInfo.authors}</span>
        </div>
      </div>
    </>
  );
}
