

export class Cart {
    public name: string="";
    public Product_ID:string="";
   
    public singleimage:string="";
    public price:string="";
   
    public qtyordered:string="";
    public quantity:string="";
    
    public cbm:string="";
    public total:string="";
    public orderItems_ID:number=0;
    public order_ID:number=0;
    public Product_ID_custom:string="";
    public order_ID_custom:string="";
    public singleprice:string="";
    
    constructor(orderItems_ID:number,name: string,Product_ID:string,singleimage:string,qtyselected:string,price:string,cbm:string,total:string,orderid:number,Product_ID_custom:string,order_ID_custom:string) {
        this.name = name;
        this.Product_ID=Product_ID;
    
        this.singleimage=singleimage;
    
        this.price=price;
        this.qtyordered=qtyselected;
        this.cbm=cbm;
        this.total=total;
        this.orderItems_ID=orderItems_ID;
        this.order_ID=orderid;
        this.quantity="0";
        this.Product_ID_custom=Product_ID_custom;
        this.order_ID_custom=order_ID_custom;
    }
}
