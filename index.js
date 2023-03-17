import express from "express";
import bodyParser from "body-parser";
import authorRoute from './routes/author.js'
import bookRoute from './routes/books.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/author', authorRoute)
app.use('/book', bookRoute)

app.get('/', (req, res) => {
    res.send("Homepage")
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));