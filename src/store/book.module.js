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
        },
        removeBook(state, { bookId }) {
            let idx = state.books.findIndex(book => book.id === bookId)
            state.books.splice(idx, 1)
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
        },
        async removeBook({ commit }, { bookId }) {
            bookService.removeBook(bookId)
            commit({ type: 'removeBook', bookId })
        }
    }



}