export class Contact {
    private firstname: string;
    private lastname: string;
    private id:number;
    private phone:string;
    private email:string;
    private subject:string;
    private desc:string;

   
    constructor(id:number,firstname:string,lastname:string,phone:string,email:string,subject:string,desc:string) {
        this.id=id;
        this.firstname = firstname;
        this.lastname=lastname;
        this.phone=phone;
        this.email=email;
        this.subject=subject;
        this.desc=desc;

    }
}
