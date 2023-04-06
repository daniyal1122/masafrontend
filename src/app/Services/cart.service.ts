import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../MODEL/cart';
import { Pricing } from '../MODEL/pricing';
import { map, Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cart[] = [];
  tempitems: Cart[] = [];
  tempget:Cart[]=[];
  subtotal:Pricing[]=[];

  temparray: Cart[] = [];
  subtotalvalstring:string="";

    // Observable string source
    private subtotalSource = new BehaviorSubject<string>("");
    private cbmtotalSource = new BehaviorSubject<string>("");
    private cartitemSource = new BehaviorSubject(this.items);
    // Observable string stream
    subtotal$ = this.subtotalSource.asObservable();
    cbmtotal$ = this.cbmtotalSource.asObservable();
    cartitem$ = this.cartitemSource.asObservable();
  constructor(private httpClient: HttpClient,private router:Router) { }
 
  /* . . . */
  
    addToCart(cart: Cart) {
     this.tempitems=JSON.parse(localStorage.getItem('cartitemslist') || '[]');
      if(this.temparray != null)
      {
        this.tempitems.push(cart);
        localStorage.setItem("cartitemslist",JSON.stringify(this.tempitems)) ;
      }
      else
      {
        this.items.push(cart);
        localStorage.setItem("cartitemslist",JSON.stringify(this.items)) ;
      }
  
      this.items.push(cart);
      var tt=JSON.parse(localStorage.getItem('cartitemslist') || '[]');
 
      this.getItems();
     this.subtotalcalution();
     this.totalcbmcalution();
  
    }
    subtotalcalution()
    {

      let value=0;
      this.items.forEach(element => {
       value=value + Number(element.price)
      });
      
      localStorage.removeItem('subtotallist');
        localStorage.setItem("subtotallist",JSON.stringify(value)) ;

      
    
    var substorage= JSON.parse(localStorage.getItem('subtotallist') || '[]');

    this.subtotalSource.next(String(substorage));
    return String(substorage);
    }
    totalcbmcalution()
    {

  
      let value=0;
      this.items.forEach(element => {
       value=value +  Number(element.total ) ;
      
      });
      
      localStorage.removeItem('totalcbm');
        localStorage.setItem("totalcbm",JSON.stringify(value)) ;

      
    
    var substorage= JSON.parse(localStorage.getItem('totalcbm') || '[]');

    this.cbmtotalSource.next(String(substorage));
    return String(substorage);
    }
    getItems() {
      this.tempget=JSON.parse(localStorage.getItem('cartitemslist') || '[]');

      this.cartitemSource.next(this.tempget);

     return this.tempget;
    }
  
    clearCart(id:any) {
      localStorage.removeItem('cartitemslist');
      this.items = this.items.filter(
        x => x.Product_ID !== id);
        localStorage.setItem("cartitemslist",JSON.stringify(this.items)) ;

        this.subtotalcalution();
        this.totalcbmcalution();
      //  return this.temparray;
    }
    RemoveAll() {
      localStorage.removeItem('cartitemslist');
      this.items = this.items.filter(
        x => x.Product_ID);
        this.subtotalcalution();
        this.totalcbmcalution();
        this.getItems();
       
//  return this.items;
    }
}
