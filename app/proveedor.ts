import mongoose = require("mongoose");
import { connectMongoDB } from "./helpers";
  

 export interface IProveedor extends mongoose.Document{
    nombre:string;
    direccion:string;
}

const proveedorSchema = new mongoose.Schema({
     nombre:{type:String,required:true},
     direccion:{type:String,required:true}
});

export const Proveedor = mongoose.model<IProveedor>("proveedor",proveedorSchema);
export const Createproved = async function(nombr:string,direccion:string){
      await connectMongoDB;
      const newONE = new Proveedor();
      newONE.nombre = nombr;
      newONE.direccion=direccion;

      newONE.save((err:any)=>{
          if(err){
              console.log(err.massage)
          }else{
              console.log(newONE)
          }
      });
}
export function getPoveedor(_nombre:string):Promise<any>{
    return new Promise<any>(resolve =>{
        Proveedor.findOne({nombre:_nombre},(err:any,data:any)=>{
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        });
    });
}

