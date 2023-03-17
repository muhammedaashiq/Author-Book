import express from 'express';
import { getAllBooks, createBook, getBook, deleteBook, updateBook } from '../Controllers/book.js';

const router = express.Router();

router.route('/')
    .get(getAllBooks)
    .post(createBook)

router.route('/:id')
    .get(getBook)
    .delete(deleteBook)
    .patch(updateBook)


export default router;