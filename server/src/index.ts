import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('api working :)');
});

app.listen(port, () => {
    console.log(`Server initialized in http://localhost:${port}`);
});
