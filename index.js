import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Welcome Iryna!');
});

app.listen(port, () => console.log(`Server listens on http://localhost:${port}`));