const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const Router = require('./src/routes')

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(Router);

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server started ", PORT));
