const express = require('express');
const app = express();
const routeConfig = require('./src/config/routeConfig');
const cors = require('cors');
const appConfig = require('./src/config/main-config');

app.use(express.json());
app.use(cors());

routeConfig.init(app);
appConfig.init();

app.listen(8000, function(){
    console.log('Server side running on port 8000')
});