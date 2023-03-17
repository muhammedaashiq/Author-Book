import express from 'express';
import { getAllAuthors, createAuthor, getAuthor, deleteAuthor, updateAuthor } from '../Controllers/author.js';

const router = express.Router();

router.route('/')
    .get(getAllAuthors)
    .post(createAuthor)

router.route('/:id')
    .get(getAuthor)
    .delete(deleteAuthor)
    .patch(updateAuthor)


export default router;