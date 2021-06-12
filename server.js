const appPort = 3000;
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: false}));

require('./routes/routes')(app, express);

app.listen(appPort, () => console.log(`Server running on port ${appPort}`));