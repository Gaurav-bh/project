import { InternalNgModuleRef } from "@angular/core/src/linker/ng_module_factory";

export class category

{
    emp_id!:number;

    Name:string=""


    Desc: string="";

    image:string="";

    constructor(name:string,desc: string,img:string){

        this.Name=name;


   this.Desc=desc;

    this.image=img;
    }
}
