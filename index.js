const express = require('express');
const userRouter = require('./routes/user.routes.js');

const app = express();
const port = 3000;

/*app.get('/', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Welcome User!');
});*/

app.use(express.json());
app.use('/api', userRouter);

app.listen(port, () => console.log(`Server listens on http://localhost:${port}`));