// Globals
const bookShelf = document.querySelector('.book-shelf');
const formDiv = document.querySelector('.form-div');
const showFormButton = document.querySelector('.show-form');


const library = {
    books: [],

    addBook(title, author) {
        this.books.push(
            new Book ({title, author})
        )
    },

    render() {
        this.books.forEach (book => {
            bookShelf.appendChild(book.element)
        })
    }
}

class Book {
    constructor ({title, author}) {
        this.title = title;
        this.author = author;

        this.element = document.createElement('div');
        this.element.classList.add('book-element', 'bordered', 'shadowed')


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

// Events
document.querySelector('.submit-book').addEventListener('click', (e) => {

    e.preventDefault();
    let newTitle = document.querySelector('#title').value;
    let newAuthor = document.querySelector('#author').value;
    library.addBook(newTitle, newAuthor);
    library.render();

    showFormButton.classList.toggle('invis');

    formDiv.classList.toggle('invis');
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
})


document.querySelector('.show-form').addEventListener('click', () => {
    formDiv.classList.toggle('invis');
    showFormButton.classList.toggle('invis');
    console.log(formDiv)
})

document.querySelector('.hide-form').addEventListener('click', (e) => {
    e.preventDefault();
    formDiv.classList.toggle('invis');
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    showFormButton.classList.toggle('invis');
})

// Render
library.render();