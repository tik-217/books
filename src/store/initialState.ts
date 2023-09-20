const booksDataItems = {
  kind: "",
  id: "",
  etag: "",
  selfLink: "",
  volumeInfo: {
    title: "",
    authors: [""],
    publisher: "",
    publishedDate: "",
    description: "",
    industryIdentifiers: [
      {
        type: "",
        identifier: "",
      },
      {
        type: "",
        identifier: "",
      },
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 0,
    printType: "",
    categories: [""],
    averageRating: 0,
    ratingsCount: 0,
    maturityRating: "",
    allowAnonLogging: false,
    contentVersion: "",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail: "",
      thumbnail: "",
    },
    language: "",
    previewLink: "",
    infoLink: "",
    canonicalVolumeLink: "",
  },
  saleInfo: {
    country: "",
    saleability: "",
    isEbook: false,
    listPrice: {
      amount: 0,
      currencyCode: "",
    },
    retailPrice: {
      amount: 0,
      currencyCode: "",
    },
    buyLink: "",
    offers: [
      {
        finskyOfferType: 0,
        listPrice: {
          amountInMicros: 0,
          currencyCode: "",
        },
        retailPrice: {
          amountInMicros: 0,
          currencyCode: "",
        },
      },
    ],
  },
  accessInfo: {
    country: "",
    viewability: "",
    embeddable: false,
    publicDomain: false,
    textToSpeechPermission: "",
    epub: {
      isAvailable: false,
      acsTokenLink: "",
    },
    pdf: {
      isAvailable: false,
    },
    webReaderLink: "",
    accessViewStatus: "",
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet: "",
  },
};

const initialState = {
  searchText: "all",
  loading: false,
  success: false,
  bookItem: booksDataItems,
  isOpenBook: false,
  categories: "all",
  sorting: "relevance",
  booksData: {
    kind: "",
    totalItems: 0,
    items: [booksDataItems],
  },
  booksItems: [booksDataItems],
};

export default initialState;
