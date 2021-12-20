export class User

{

    
    id:number=0;
    Fname: string="";

    Lname:string="";

    Email:string="";

    Phone:string="";
    Address:string="";
    username:string="";
    password:string="";


    constructor( id:number,Fname:string, Lname:string,Email:string, Phone:string,Address:string,username:string,password:string){

       
        this.id=id;
        this.Fname = Fname;

        this.Lname = Lname;

        this.Email = Email;

        this.Phone = Phone;
        this.Address=Address;
        this.username=username;
        this.password=password;
    }
}
