const bookShelf = document.querySelector('.book-shelf');
bookShelf.classList.toggle('bordered');

const myLib = [];

// class BookElement {
//     constructor (title, author) {
//         this.title = title 
//         this.author = author
//     }
// }

const library = {
    books: [],

    addBook(title, author) {
        this.books.push(
            new Book ({title, author})
        )
    }
}

class Book {
    constructor ({title, author}) {
        this.title = title;
        this.author = author;

        this.element = document.createElement('div');
        this.element.classList.toggle('book-element');
        this.element.classList.toggle('bordered');


        if (!this.cover) {
            const titleDiv = document.createElement('h2');
            titleDiv.classList.toggle('title-div');
            titleDiv.textContent = this.title;
            this.element.appendChild(titleDiv);

            const authorDiv = document.createElement('h3');
            authorDiv.classList.toggle('author-div');
            authorDiv.textContent = this.author;
            this.element.appendChild(authorDiv);
        }


    }


}

// Testing
library.addBook(
    'The Sandman',
    'Neil Gaiman'   
)

library.addBook(
    'The Name of the Wind',
    'Patrick Rothfuss'
)


function renderLib () {
    library.books.forEach (book => {
        bookShelf.appendChild(book.element)
    })
}

renderLib()