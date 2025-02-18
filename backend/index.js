import express, { json } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());



app.listen(PORT, () => {
    console.log(`Server online na portu ${PORT}`)
})