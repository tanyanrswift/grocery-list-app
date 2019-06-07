const express = require('express');
const app = express();
const routeConfig = require('./src/config/routeConfig');

app.use(express.json());

routeConfig.init(app);

app.listen(8000, function(){
    console.log('Server side running on port 8000')
});