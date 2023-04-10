const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('click', filterBooks))

function filterBooks() {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;

  let filteredBooks = category == 'disponivel' ? 
    books.filter(book => book.quantidade > 0) : 
    books.filter(book => book.categoria == category
  );

  // console.table(filteredBooks);
  showBooksOnScreen(filteredBooks);
}
