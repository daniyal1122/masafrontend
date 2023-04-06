export class User {
    private firstname: string;
    private lastname: string;
    private id:number;
    private phone:string;
    private email:string;
    private password:string;
    private verification:string;
    
    
    constructor(id:number,firstname:string,lastname:string,phone:string,email:string,password:string,verification:string) {
        this.id=id;
        this.firstname = firstname;
        this.lastname=lastname;
        this.phone=phone;
        this.email=email;
        this.password=password;
        this.verification=verification;
    }
}