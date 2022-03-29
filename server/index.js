const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

const cors = require('cors');
app.use(cors({
    origin: '*'
}))

// resume GET route
app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, './src', 'resume.json'))
})

app.get('/grades', (req, res) => {
    //console.log(Object.keys(req.query)[0])
    var term = Object.keys(req.query)[0]
    if (term.toLowerCase().startsWith("sp")) 
        term = "p" + term.slice(-2);
    else if (term.toLowerCase().startsWith("su"))
        term = "u" + term.slice(-2);
    else if (term.toLowerCase().startsWith("fa"))
        term = "fa" + term.slice(-2);
    else 
        return;
        
    res.sendFile(path.join(__dirname, './src', term + '.json'))
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});