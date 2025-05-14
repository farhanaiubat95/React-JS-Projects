import app from './app.js';
import serverPort from './src/serverPort.js'; //export "serverPort": 5001 from secret.js
import connectDB from './src/config/db.js';


//now we can run or listen this server
app.listen(serverPort, () => {
    console.log("server is running at http://localhost:" + serverPort);
     // connect to MongoDB
     connectDB();
});


