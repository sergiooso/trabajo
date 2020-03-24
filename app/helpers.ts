import mongoose = require("mongoose");
import { resolve } from "dns";

const uri: string = "mongodb+srv://sjavila012:(sergiocolita1)@cluster0-9uoro.mongodb.net/ventas?retryWrites=true&w=majority";

export const connectMongoDB  = new Promise<void>(resolve => {
    mongoose.connect(uri,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log("Conexion exitosa");
        }
        resolve();
    });
});
