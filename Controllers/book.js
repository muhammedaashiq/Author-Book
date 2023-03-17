import { books, authors } from '../Database/Data.js'


export const getAllBooks = (req, res) => {
    res.send(books)
}

export const createBook = (req, res) => {

    if (!req.body.ISBN || !req.body.authorId || !req.body.bookName) {
        res.send("ENTER A VALID DATA!!")
    } else {
        const book = req.body

        const isISBNDuplicate = books.some((iterateBooks) => {
            return iterateBooks.ISBN == book.ISBN
        })

        const isAuthorExists = authors.some((iterateAuthor) => {
            return iterateAuthor.name.toLowerCase() == book.authorId.toLowerCase();
        })

        if (isAuthorExists) {
            if (isISBNDuplicate) {
                res.send('ISBN Already Exists!!!')
            } else {
                books.push(req.body)
                res.send(books)
            }
        } else {
            res.send("Create Author First!!")
        }
    }
}

export const getBook = (req, res) => {
    let { id } = req.params
    console.log(id)
    let getBook = books.filter((iterateBooks) => {
        return iterateBooks.ISBN === id;
    })

    console.log(getBook);
    res.send(`${getBook.length == 0 ? "No book Found" : getBook[0].bookName}`)
}

export const deleteBook = (req, res) => {
    const { id } = req.params;

    const index = books.findIndex((book) => book.ISBN === id);
    if (index !== -1) {
        books.splice(index, 1);
        res.send(`Book with ${id} this id deleted `);
    } else {
        res.send(`Book with ${id} this id not found `);
    }

}

export const updateBook = (req, res) => {
    const { id } = req.params;
    const { authorId, bookName, ISBN } = req.body;

    const book = books.find((book) => book.ISBN === id);

    if (book) {
        if (authorId) book.authorId = authorId;
        if (bookName) book.bookName = bookName;
        if (ISBN) book.ISBN = ISBN;

        res.send(`author with the id ${id} has been updated.`)
    } else {
        res.send("NO BOOK FOUND!!!")
    }

}