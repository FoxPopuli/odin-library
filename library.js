// Globals
const bookShelf     = document.querySelector('.book-shelf');
const formDiv       = document.querySelector('.form-div');
const form          = document.querySelector('form');
const buttonDiv     = document.querySelector('.button-container');
const showFormButton = document.querySelector('.show-form');
const errorDiv      = document.querySelector('.error');


const library = {
    books: [],
    dispBooks: [],
    searchString: '',

    addBook(title, author) {
        this.books.push(
            new Book ({title, author})
        )
    },

    render() {
        bookShelf.textContent = '';
        if (this.searchString) {
            console.log('Searching')
            this.dispBooks = this.books.filter(book => {

                console.log(book.title.includes(this.searchString) || book.author.includes(this.searchString))
                return book.title.includes(this.searchString) || book.author.includes(this.searchString);
            })
        } else {
            this.dispBooks = this.books;
        }

        this.dispBooks.forEach (book => {
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
            titleDiv.classList.add('title-div');
            titleDiv.textContent = this.title;
            this.element.appendChild(titleDiv);

            const authorDiv = document.createElement('h3');
            authorDiv.classList.add('author-div');
            authorDiv.textContent = this.author;
            this.element.appendChild(authorDiv);
        }
    }
}

// EVENTS

// Populate
populateButton = document.querySelector('.populate')
populateButton.addEventListener('click', () => {

    library.addBook(
        'The Sandman',
        'Neil Gaiman'   
    )
    
    library.addBook(
        'The Name of the Wind',
        'Patrick Rothfuss'
    )
    
    library.addBook(
        'Mistborn',
        'Brandon Sanderson'
    )
    
    library.addBook(
        'Watchmen',
        'Alan Moore'
    )
    
    library.addBook(
        '1984',
        'George Orwell'
    )

    library.render()
    populateButton.classList.add('invis');
})

// Form
document.querySelector('.submit-book').addEventListener('click', (e) => {

    e.preventDefault();
    let newTitle = document.querySelector('#title').value;
    let newAuthor = document.querySelector('#author').value;


    errorDiv.textContent = '';
    if (!newTitle || !newAuthor) {

        let errorText = 'Please enter ';
        if (!newTitle && !newAuthor) {
            errorText += 'a title and an author.'
        } else if (!newTitle) {
            errorText += 'a title.'
        } else {
            errorText += 'an author.'
        }

        errorDiv.textContent = errorText;

    } else {
        library.addBook(newTitle, newAuthor);
        library.render();
    
        showFormButton.classList.toggle('invis');
    
        formDiv.classList.toggle('invis');
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
    }


})

document.querySelector('.show-form').addEventListener('click', () => {
    formDiv.classList.toggle('invis');
    showFormButton.classList.toggle('invis');
    errorDiv.textContent = '';
})

document.querySelector('.hide-form').addEventListener('click', (e) => {
    e.preventDefault();
    formDiv.classList.toggle('invis');
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    showFormButton.classList.toggle('invis');
})

// Search
const searchBar = document.querySelector('#search');
searchBar.addEventListener('focus', () => {

    document.addEventListener('keyup', (e) => {
        library.searchString = searchBar.value;
        library.render();
    })
})


// Render
library.render();