


export default {
    query,
    getById
}

function query() {
    return books
}
function getById(id) {

    return books.find(book => book.id === id)

}

let books = [{
    "id": "GXj93KOkqZoC",
    "title": "Hacking",
    "subtitle": "Digital Media and Technological Determinism",
    "authors": [
        "Tim Jordan",
        "Puki Ben David"
    ],
    "publishedDate": 2008,
    "description": "Hacking provides an introduction to the community of hackers and an analysis of the meaning of hacking in twenty-first century societies.",
    "pageCount": 160,
    "categories": [
        "Computers",
        "Hack"
    ],
    "thumbnail": " http://coding-academy.org/books-photos/1.jpg",
    "language": "en",
    "listPrice": {
        "amount": 19,
        "currencyCode": "ILS",
        "isOnSale": true
    }
}, {
    "id": "GXj93KOkqZoC",
    "title": "Hacking",
    "subtitle": "Digital Media and Technological Determinism",
    "authors": [
        "Tim Jordan",
        "Puki Ben David"
    ],
    "publishedDate": 2008,
    "description": "Hacking provides an introduction to the community of hackers and an analysis of the meaning of hacking in twenty-first century societies.",
    "pageCount": 160,
    "categories": [
        "Computers",
        "Hack"
    ],
    "thumbnail": " http://coding-academy.org/books-photos/1.jpg",
    "language": "en",
    "listPrice": {
        "amount": 19,
        "currencyCode": "ILS",
        "isOnSale": true
    }
}, {
    "id": "GXj93KOkqZoC",
    "title": "Hacking",
    "subtitle": "Digital Media and Technological Determinism",
    "authors": [
        "Tim Jordan",
        "Puki Ben David"
    ],
    "publishedDate": 2008,
    "description": "Hacking provides an introduction to the community of hackers and an analysis of the meaning of hacking in twenty-first century societies.",
    "pageCount": 160,
    "categories": [
        "Computers",
        "Hack"
    ],
    "thumbnail": " http://coding-academy.org/books-photos/1.jpg",
    "language": "en",
    "listPrice": {
        "amount": 19,
        "currencyCode": "ILS",
        "isOnSale": true
    }
}]