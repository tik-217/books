// axios
import axios from "axios";

// utils
import key from "../utils/apiKeys";

export async function booksSearch(
  search: string,
  categories: string,
  sorting: string,
  paginStart: number = 0,
  totalItems: number = 30
) {
  const maxResults = 30;

  if (totalItems - paginStart < maxResults) {
    paginStart = totalItems - paginStart;
  }

  const params = {
    key,
    q: `${search}+${categories}`,
    startIndex: paginStart,
    maxResults,
    orderBy: sorting,
  };

  return await axios({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes`,
    params,
  });
}
