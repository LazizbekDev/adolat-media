import express from 'express'
import data from './data/news.js'
import dotenv from 'dotenv'
import connect from "./db/db.js";
import newsRoute from "./routes/newsRoute.js";
import {errorHanler, notFound} from "./middleWare/errorMiddleware.js";
import userRoute from "./routes/userRoute.js";


const app = express();
app.use(express.json());
dotenv.config();
connect();

app.get('/', (req, res) => {
    res.send('Adolat Media | Back-end')
})

app.use('/api/xabarlar', newsRoute);
app.use('/api/user', userRoute);

app.get('/api/xabar/:id', (req, res) => {
    const xabar_id = req.params.id;
    const xabar = data.find((xabarlar) => xabarlar._id === xabar_id)
    console.log(xabar)

    res.json(xabar)
})

app.use(notFound)
app.use(errorHanler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server porti: ${PORT}, mode: ${process.env.NODE_ENV}`.bgCyan.black)
})