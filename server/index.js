const express = require('express');
const app = express();

app.use(express.json());

app.listen(8000, function(){
    console.log('Server side running on port 8000')
});