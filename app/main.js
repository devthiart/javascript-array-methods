let books = [];
const APIEndpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getAPIBooks();

async function getAPIBooks() {
  const response = await fetch(APIEndpoint);
  books = await response.json();
  // console.table(books);
  let discountBooks = applyDiscount(books);

  showBooksOnScreen(discountBooks);
}
