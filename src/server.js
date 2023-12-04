const express = require('express');
const configViewEngine = require('./configs/viewEngine.js');
const initWebRoutes = require('./routes/web.js');
const app = express();

//config engines
configViewEngine(app);

//init web routes
initWebRoutes(app);

require('dotenv').config();
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log(`app is running at http://localhost:${PORT}`);
})