import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router, TitleStrategy,NavigationEnd ,ActivatedRoute,Event} from '@angular/router'; 
import { Subcategories } from '../Model/subcategories';
import { Categories } from '../Model/categories';
import { CartService } from '../Services/cart.service';
import { Cart } from '../MODEL/cart';
import { Pricing } from '../MODEL/pricing';
import { Observable,filter, observable } from 'rxjs';

import * as myGlobals from 'src/app/Global/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subcategoryList:any = [];
  categoryList:any = [];
  // cartlist:Cart[]= JSON.parse(localStorage.getItem('cartitemslist') || '[]');
  cartlist:Cart[]= this.cartService.getItems();
  cartlist1:Cart[]=[];
  subtotal:any=[];
  totalcbm:any=[];
  selected_product: any ;
  productlist: any ;
  currentRoute: string=""; 
 searchbar:string="";
 imageurl:string=myGlobals.imageurl;
  selectEvent(event:any) {
    this.selected_product = JSON.stringify(event);
    
    this.router.navigate(['/details',event.product_ID]);
  }
  constructor( private sharedService: SharedService,private router: Router, private cartService: CartService,private activatedRoute : ActivatedRoute) { 
    this.GetSubtotal();
    this.Gettotalcbm();
    // router.events.filter((event:any) => event instanceof NavigationEnd)
    // .subscribe(event => 
    //  {
    //     this.currentRoute = event.url;          
    //     console.log(event);
    //  });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  ).subscribe((event:any) => {
  //set breadcrumbs
 this.currentRoute =event.url.replace(/\//g, '') ; 
 this.currentRoute=this.currentRoute.replace(/[0-9]/g, '');
  // alert( this.currentRoute+ "-------");
});
    
  }

  ngOnInit(): void {
    // this.cartlist=this.cartService.getItems();

    this.CategoriesList();
    this.SubCategoriesList();
    this.GetCartList();
     this.GetSubtotal();
     this.Gettotalcbm();
     this.getProductsdata();
     
  }
  Searchbytext()
  {
    
   
  var value=(<HTMLInputElement>document.getElementById("searchEmployee1")).value;

     this.router.navigate(['/products',value]);
  }
  getProductsdata()
  {
    this.sharedService.getProducts().subscribe(data =>{ 
     this.productlist=data;
<<<<<<< HEAD
     
=======
     console.log(this.productlist);
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
    
   });  

 
    // this.televisionlist=this.televisionlist.take(1);
  }
GetSubtotal()
{
  this.cartService.subtotal$.subscribe(
    data => {
      this.subtotal = data; 
 
    });

  var str=  JSON.parse(localStorage.getItem('subtotallist') || '[]');
  if(str)
  {
    this.subtotal=str;
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
}
GetCartList()
{

  this.cartService.cartitem$.subscribe(
    data => {
      this.cartlist = data;
      
    });

}
SubCategoriesList() {
    this.sharedService.getSubCategories().subscribe(data =>{
       this.subcategoryList = data;     
    });    
  }
  CategoriesList() {
    this.sharedService.getCategories().subscribe(data =>{
    this.categoryList = data;
    });    

  }

    removefromcart(id:any)
    {
    this.cartService.clearCart(id);
   // this.GetCartList();
    this.cartlist=this.cartService.getItems();
    this.GetSubtotal();
    this.Gettotalcbm();

    }
}
