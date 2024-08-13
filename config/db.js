const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://habib160947:IvvlsHC7u2hau01N@backenddb.bjlri.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB');
        console.log('Connnected to MongoDB');
    }catch(e){
        console.error('Failed to connect to MongeDB',e);
        process.exit(1);
    }
}

module.exports = connectDB;

