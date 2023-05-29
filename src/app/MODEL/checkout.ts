import { TitleStrategy } from "@angular/router";

export class Checkout {
    public country?:string="";
    public firstaname?:string="";
    public lastname?:string="";
    public companyname?:string="";
    public order_ID?:Number=0;
  // 
    public city?:string="";
    public zip?:string="";
    public state?:string="";
    public address1?:string="";
    public address2?:string="";
    public email?:string="";
    public phone?:string="";
    public createaccount?:string="";
    public password?:string="";
    public ordernotes?:string="";
    public totalcbm?:string="";
    public totalprice?:string="";
    public datetime?:string="";
    public id?:Number=0;
    public usersid?:Number=0;
    constructor(OrderID:Number,country: string,firstname:string,lastname:string,companyname:string,city:string,zip:string,state:string,address1:string,address2:string,email:string,phone:string,ordernotes:string,totalcbm:string,totalprice:string,datetime:string,id:Number,usersid:Number) 
    {
        this.country = country;
        this.firstaname=firstname;
        this.lastname=lastname;
        this.companyname=companyname;
        this.city=city;
        this.zip=zip;
        this.state=state;
        this.address1=address1;
        this.address2=address2;
        this.email=email;
        this.phone=phone;
        this.ordernotes=ordernotes;
        this.order_ID=OrderID;
        this.totalcbm=totalcbm;
        this.totalprice=totalprice;
        this.datetime=datetime;
        this.id=id;
        this.usersid=usersid;
        
    
    }
}
