
import books from '../../public/books.json'

let gBooks = books

export default {
    query,
    getById
}

function query() {
    return gBooks
}
function getById(id) {

    return gBooks.find(book => book.id === id)

}

