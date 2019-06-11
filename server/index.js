const express = require('express');
const app = express();
const routeConfig = require('./src/config/routeConfig');
const cors = require('cors');

app.use(express.json());
app.use(cors);

routeConfig.init(app);

app.listen(8000, function(){
    console.log('Server side running on port 8000')
});