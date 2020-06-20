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
        },
        editBook(state, { newBook }) {
            console.log("editBook -> newBook", newBook)

            let idx = state.books.findIndex(b => { b.id === newBook.id })
            state.books.splice(idx, 1, newBook)
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
        },
        async editBook({ commit }, { book }) {
            let newBook = await bookService.editBook(book)
            commit({ type: 'editBook', newBook })
        },

        async addRating({ commit }, { info }) {
            console.log(info)
            let newBook = await bookService.addRating(info)
            commit({ type: 'editBook', newBook })

        }
    }



}