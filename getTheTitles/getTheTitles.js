const getTheTitles = function(books) {
    let booksTitles = books.map(book=> book.title)
    return booksTitles;
}

module.exports = getTheTitles;
