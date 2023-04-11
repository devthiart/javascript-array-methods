const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('click', filterBooks))

function filterBooks() {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;

  let filteredBooks = category == 'disponivel' ? 
    filterByAvailability() : 
    filterByCategory(category);

  // console.table(filteredBooks);
  showBooksOnScreen(filteredBooks);

  if(category == 'disponivel') {
    const totalValue = calcTotalValueOfAvailableBooks(filteredBooks);
    showTotalValueOfAvailableBooksOnScreen(totalValue);
  }
}

function filterByCategory(category) {
  return books.filter(book => book.categoria == category);
}

function filterByAvailability() {
  return books.filter(book => book.quantidade > 0);
}

function showTotalValueOfAvailableBooksOnScreen(totalValue) {
  
  elementTotalValueOfAvailableBooks.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
  `;
}
