import mongoose = require("mongoose");
  

interface Proveedor extends mongoose.Document{
    nombre :string;
    direccion:string;
}

const proveedorSchema = new mongoose.Schema({
     name:{type:String,required:true},
     direccion:{type:String,required:true}
});

export const Proveedor = mongoose.model<Proveedor>("proveedor",proveedorSchema);
//export const Cproved = async function(nombre:string,direccion:string){

//}