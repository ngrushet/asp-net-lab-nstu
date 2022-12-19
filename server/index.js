require('dotenv').config()
const express = require('express');
const cors = require('cors')

// local modules
const sequelize = require('./db')
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');

const PORT = process.env.port || 5000
const app = express();

app.use(cors())
app.use(express.json())     
app.use('/api', router);    // Подключение маршрутизатора API
app.use(errorHandler)       // Обработчик ошибок

const start = async () => {
    try {
        await sequelize.authenticate()  // подключение к PostgreSQL через sequelize 
        await sequelize.sync()          
        app.listen(PORT, () => console.log('Server started on port =', PORT));
    } catch (e) {
        console.log(e);
    }
}

start()