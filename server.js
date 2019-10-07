const express = require('express');
const cors = require('cors');
const Router = require('./src/routes')

const app = express();
app.use(cors());
app.use(Router);


app.listen(3333,()=> console.log("Server started"));