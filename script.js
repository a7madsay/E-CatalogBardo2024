const book = document.querySelector('.book');
let currentPage = 0;

window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        nextPage();
    } else {
        previousPage();
    }
});

function nextPage() {
    if (currentPage < book.children.length - 1) {
        currentPage++;
        updateBookPosition();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        updateBookPosition();
    }
}

function updateBookPosition() {
    const offset = -currentPage * 100;
    book.style.transform = `translateX(${offset}%)`;
}
