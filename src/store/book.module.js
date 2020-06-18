import bookService from '../services/book.service'


export default {


    state: {
        currBook: null,
        books: []

    },

    getters: {
        books(state) {
            return state.books
        }

    },
    mutations: {
        loadBooks(state, { books }) {
            state.books = books
        },
        addBook(state, { newBook }) {
            state.books.unshift(newBook)
        }


    },
    actions: {
        async loadBooks(context, payload) {
            let books = await bookService.query()
            context.commit({ type: 'loadBooks', books });
            return books
        },
        async addBook({ commit }, { book }) {
            let newBook = await bookService.addBook(book)
            commit({ type: 'addBook', newBook })
            return newBook
        }
    }



}