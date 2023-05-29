import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/MODEL/cart';
import { CartService } from 'src/app/Services/cart.service';
import { HeaderComponent } from 'src/app/header/header.component';
import * as myGlobals from 'src/app/Global/global';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[HeaderComponent ]
})
export class CartComponent implements OnInit {
  subcategoryList:any = [];
  categoryList:any = [];
  // cartlist:Cart[]= JSON.parse(localStorage.getItem('cartitemslist') || '[]');
  cartlist:Cart[]= this.cartService.getItems();
  cartlist1:Cart[]=[];
  subtotal:any=[];
 totalcbm:any=[];
 totalpercentageremaining:any=0;
 totalcbmremaining:any=0;
<<<<<<< HEAD
 totalquantityselected:any=0;
=======
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
 imageurl:any=myGlobals.imageurl;

  constructor(  private cartService: CartService,private comp: HeaderComponent) { 
    this.GetSubtotal();
    this.Gettotalcbm();
  }
  ngOnInit(): void {
    // this.cartlist=JSON.parse(localStorage.getItem('cartitemslist') || '[]');
    this.GetSubtotal();
    this.Gettotalcbm();
    this.GetCartList();
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

    if(this.totalcbm !="0")
    {
      let x=Number(68) - Number(this.totalcbm) ;
         let y= x / Number(68);

         let z= y * 100;

         this.totalpercentageremaining=z;

         this.totalcbmremaining=Number(68) - Number(this.totalcbm) ;;
    }
   
}
GetCartList()
{
  this.cartService.cartitem$.subscribe(
    data => {
      this.cartlist = data; 
<<<<<<< HEAD
  this.cartlist.forEach(element => {
  this.totalquantityselected= Number(this.totalquantityselected) + Number(element.qtyordered) ;
  });
=======
  
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
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

}
