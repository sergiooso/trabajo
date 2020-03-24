import mongoose = require("mongoose");
import {Proveedor,getPoveedor, IProveedor} from "./proveedor";
import {connectMongoDB} from "./helpers";

interface Products extends mongoose.Document{
    produc_id:number;
    produc_name:string;
    precio_vent:number;
    precio_cost:number;
    proveedor:IProveedor;
}

const producSchema = new mongoose.Schema({
    produc_name:{type:String,required:true},
    precio_vent:{type:Number,required:true},
    precio_cost:{type:Number,required:true},
    proveedor: { type: mongoose.Schema.Types.ObjectId, ref: "proveedor" }
});

export const Producto = mongoose.model<Products>("Producto",producSchema);

export const Createproduct = async function(nomeproveedor:string,produc_name:string,precio_vent:number,precio_cost:number){
 
    await connectMongoDB;

    const proved:any = await getPoveedor(nomeproveedor);
 
    const s =new Producto();

    s.produc_name=produc_name;

    s.precio_vent=precio_vent;

    s.precio_cost=precio_cost;

    s.proveedor= proved;
    
    s.save((err:any)=>{
     if(err){
         console.log(err.message);
     }else{
         console.log(s);
     }
     });
}


