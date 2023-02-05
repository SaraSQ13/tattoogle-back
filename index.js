import express, {json} from "express"
import cors from "cors"

//loadEnv.js
import dotenv from "dotenv"
dotenv.config();

import db from "./config/db.js"
import router from "./router.js"

const app = express();
const corsOptions = {
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH,POST, DELETE",
    preflightContinue: false,
    optionSuccessStatus: 204,
};


//middleware
app.use(json());
app.use(cors(corsOptions));

//routes
app.use(router);

const port = process.env.PORT || 3000;

db()
    .then(()=>{
        app.listen(port,()=>{
            console.log("Server is runnning: " + port);
        });
    })
    .catch((error)=>{
        console.log("Error connecting to Mongodb", error);
    });
