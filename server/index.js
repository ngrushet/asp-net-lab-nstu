require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const fileUpload = require('express-fileupload');
const PORT = process.env.port || 5000
const path = require('path');
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router);

// Обработка ошибок
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('hello, port =', PORT));
    } catch (e) {
        console.log(e);
    }
}

start()