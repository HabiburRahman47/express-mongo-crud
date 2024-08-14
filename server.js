const app = require('./app');
const connectDB = require('./config/db');

const port = process.env.PORT || 3000;

connectDB().then( () => {
    app.listen(port, () => {
        console.log('Server is running on port', port);
    })
})