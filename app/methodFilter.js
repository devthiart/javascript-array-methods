const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('click', filterBooks))

function filterBooks() {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;

  let filteredBooks = books.filter(book => {
    return book.categoria == category;
  });

  // console.table(filteredBooks);
  showBooksOnScreen(filteredBooks);
}
