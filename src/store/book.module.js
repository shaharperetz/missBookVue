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
        }


    },
    actions: {
        async loadBooks(context, payload) {
            let books = await bookService.query()
            context.commit({ type: 'loadBooks', books });
            return books
        }
    }



}