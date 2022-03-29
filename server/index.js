const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

// resume GET route
app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, './src', 'resume.json'))
})

app.get('/grades', (req, res) => {
    //console.log(Object.keys(req.query)[0])
    res.sendFile(path.join(__dirname, './src', Object.keys(req.query)[0] + '.json'))
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});