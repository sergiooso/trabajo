"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uri = "mongodb+srv://sjavila012:(sergiocolita1)@cluster0-9uoro.mongodb.net/Ventas?retryWrites=true&w=majority";
exports.connectMongoDB = new Promise(function (resolve) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("Conexion exitosa");
        }
        resolve();
    });
});
