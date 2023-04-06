import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/MODEL/cart';
import { CartService } from 'src/app/Services/cart.service';
import { HeaderComponent } from 'src/app/header/header.component';
import { verifyHostBindings } from '@angular/compiler';
import { Checkout } from 'src/app/MODEL/checkout';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router'; 
import Swal from 'sweetalert2';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers:[HeaderComponent ]
})
export class CheckoutComponent implements OnInit {

  public country:string="";
  public firstname:string="";
  public lastname:string="";
  public companyname:string="";
  public address:string="";
// 
  public city:string="";
  public zip:string="";
  public state:string="";
  public address1:string="";
  public address2:string="";
  public email:string="";
  public phone:string="";
  public createaccount:string="";
  public password:string="";
  public ordernotes:string="";
  public orderid:string="";

  cartlist:Cart[]= this.cartService.getItems();
  cartlist1:Cart[]=[];
  cartlist2:Cart[]=[];
  subtotal:any=[];
  totalcbm:any=[];

  datePipe: DatePipe = new DatePipe('en-US');


  constructor( private cartService: CartService,private comp: HeaderComponent,private sharedservice:SharedService,private router: Router) { 
    this.GetSubtotal();
    this.Gettotalcbm();
  }
  ngOnInit(): void {
    var id=  JSON.parse(localStorage.getItem('id') || '[]');
    var cartlist=  JSON.parse(localStorage.getItem('cartitemslist') || '[]');
    
    if(id == "" )
    {
      this.router.navigate(['/login']);
    }
    if( cartlist == "")
    {
      this.router.navigate(['/']);
    }
    // this.cartlist=JSON.parse(localStorage.getItem('cartitemslist') || '[]');
    this.GetSubtotal();
    this.GetCartList();
    this.Gettotalcbm();
    window.scrollTo(0, 0)
  }
  GetSubtotal()
{
  this.cartService.subtotal$.subscribe(
    data => {
      this.subtotal = data; 
       console.log(this.subtotal + "-----------------------");
    });
    var str=  JSON.parse(localStorage.getItem('subtotallist') || '[]');
    if(str)
    {
      this.subtotal=str;
    }
    else
    {
      this.subtotal="0";
    }
}
Gettotalcbm()
{
  this.cartService.cbmtotal$.subscribe(
    data => {
      this.totalcbm = data; 
       console.log(this.subtotal + "-----------------------");
    });
    var str=  JSON.parse(localStorage.getItem('totalcbm') || '[]');
    if(str)
    {
      this.totalcbm=str;
    }
    else
    {
      this.totalcbm="0";
    }
}
GetCartList()
{
  this.cartService.cartitem$.subscribe(
    data => {
      this.cartlist = data; 
  
    });

}
removefromcart(id:any)
{
this.cartService.clearCart(id);
 this.cartlist=this.cartService.getItems();
this.GetSubtotal();
this.Gettotalcbm();
// this.comp.GetCartList();
 //this.GetCartList();
}
SaveOrder()
{
  var id=JSON.parse(localStorage.getItem('id') || '[]');
  var totalcbm=JSON.parse(localStorage.getItem('totalcbm') || '[]');
  var totalprice=  JSON.parse(localStorage.getItem('subtotallist') || '[]');
  this.cartlist1=  JSON.parse(localStorage.getItem('cartitemslist') || '[]');
console.log(this.cartlist1);
  if(this.cartlist1.length)
  {
    var date = new Date();
    var transformDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    var obj= new Checkout(Number("0"),this.country,this.firstname,this.lastname,this.companyname,this.city,this.zip,this.state,this.address1,this.address2,this.email,this.phone,this.ordernotes,String(totalcbm),String(totalprice),String(transformDate),Number(id),Number(id));
    // console.log(totalprice);
    // console.log(totalcbm);
    // console.log(this.cartlist1);
    // console.log(obj);
    if(this.firstname)
    {
 
      if(this.phone)
      {
        this.sharedservice.postOrders(obj).subscribe((data:any)=>{
      
          if(data != "false")
          {
            this.orderid=data;
            this.cartlist1.forEach(element => {
            
            var obj=  new Cart(Number("0"),element.name,element.Product_ID,element.singleimage,String(element.qtyordered),String(element.price),String(element.total),String(element.total),Number(this.orderid),String(element.Product_ID),String(this.orderid));
              this.cartlist2.push(obj);
            });
            console.log(this.cartlist2);
            this.sharedservice.postOrdersItems(this.cartlist2).subscribe((data:any)=>{
       
            });
      
            localStorage.removeItem('totalcbm');
            localStorage.removeItem('subtotallist');
            localStorage.removeItem('cartitemslist');
      
            this.router.navigate(['/confirm']);    
          setTimeout(()=>{                           // <<<---using ()=> syntax
            this.router.navigate(['/']);
            window.location.reload();
        }, 3000);

            }
          //  this.alertService.success("Successfull");
          else
          {
          
            Swal.fire({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              icon: 'error',
             
              timer: 5000,
              title: 'Order Not Saved.' 
            })
          
          //  this.alertService.error("Error");
          }
         
        });
      }
else
{
  Swal.fire({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    icon: 'error',
   
    timer: 5000,
    title: 'Contact Field Cannot Be Empty.' 
  })
}
    }
    else
    {
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'error',
       
        timer: 5000,
        title: 'Name Cannot Be Empty.' 
      })
    }
 
  
  }
else
{

  Swal.fire({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    icon: 'error',
   
    timer: 5000,
    title: 'Your Cart Is Empty.' 
  })
}


}
}
