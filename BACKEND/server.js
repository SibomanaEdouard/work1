//this is to require all depences
const {config}=require("dotenv");
const http=require("http");
const mongo=require("mongoose");
const express=require("express");
const cors=require('cors');
const routes=require('./Routes/routes');
const bodyParser=require('body-parser');

//this is to make express as function

const app=express();
//to use config;
config();

//to create server
const server=http.createServer(app);
//connect to mongodb;
const con=mongo.connect(process.env.MONGO)

.then(()=>{
console.log("It is connected ");
})
.catch((error)=>{
    console.log("It is failed to connect to mongo",error);
})

//this is configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
//to allow the connection to react
 //app.use(cors({ origin: 'http://localhost:5400' }));
 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5400');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

//this is how to connect to the routes
app.use('/',routes);

//this is to set the port
const port=process.env.PORT || 256;
server.listen(port,(error)=>{

    if(error){
    throw error;
    }
    else{
        console.log("the server is running on port " +port );
    }
})


