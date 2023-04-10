const btnSortByPrice = document.getElementById('btnOrdenarPorPreco');

btnSortByPrice.addEventListener('click', sortBooksByPrice);

function sortBooksByPrice() {
  // The default sort order is ascending, built upon converting the elements into strings, 
  // then comparing their sequences of UTF-16 code units values.
  // Read more -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // let sortedBooks = books.sort();
  // Here I organize the books based on their price, from lowest to highest.
  let sortedBooks = books.sort((a, b) => a.preco - b.preco);

  showBooksOnScreen(sortedBooks);
}
