import { authors, books } from '../Database/Data.js'


export const getAllAuthors = (req, res) => {
    const Authors = authors.map((author) => author.name)
    res.send(Authors);
}

export const createAuthor = (req, res) => {
    const author = req.body;

    const isDuplicate = authors.some((iterateAuthor) => {
        return iterateAuthor.name.toLowerCase() == author.name.toLowerCase()
    })

    if (isDuplicate) {
        res.send(`Author with name ${author.name} Exists !!!`)
    } else {
        authors.push(author);
        res.send(`Author with name ${author.name} added to the Database`);
    }
}

export const getAuthor = (req, res) => {
    const name = req.params;

    const foundAuthor = authors.find((author) => author.name.replace(/\s/g, "").toLowerCase() === name.id.toLowerCase());
    if (foundAuthor) {
        const authorBooks = books.filter((iterateBook) => {
            return iterateBook.authorId === foundAuthor.name;
        })


        const booksNames = authorBooks.map((iterateBooks) => {
            return iterateBooks.bookName
        })

        res.send(`Author: ${foundAuthor.name},
        Books: ${booksNames.length == 0 ? "No Books" : booksNames}`)
    } else {
        res.send("Author not found!!")
    }
}

export const deleteAuthor = (req, res) => {
    let { id } = req.params;

    const index = authors.findIndex((author) => author.name.replace(/\s/g, "").toLowerCase() === id.toLowerCase());
    if (index !== -1) {
        authors.splice(index, 1);
        res.send(`Author with ${id} this id deleted `);
    } else {
        res.send(`Author with ${id} this id not found `);
    }

}

export const updateAuthor = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const author = authors.find((author) => author.name.replace(/\s/g, "").toLowerCase() === id.toLowerCase());

    if (name) author.name = name;

    res.send(`author with the id ${id} has been updated.`)
}