<<<<<<< HEAD
import { Component, OnInit ,ViewChildren} from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Router,Params  } from '@angular/router';
import { Products } from 'src/app/Model/products';
import * as myGlobals from 'src/app/Global/global';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import * as $ from 'jquery'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  // styleUrls: ['./product-list.component.css']
  styles: [
    `.categori-menu-list .menu-hidden {
        display: none!important;
     
    }
  
    `
  ]
})
export class ProductListComponent implements OnInit {
<<<<<<< HEAD
  @ViewChildren('childItem') childItem:any;

=======
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
  imageurl=myGlobals.imageurl;
  ProductsList: any =[];
  ProductsListtemp: any =[];
  ProductsFilterList: any =[];
  p: number = 1;
  categoryname:any="";
  private sub: any;
  categoryList:any=[];
  subcategoryList:any=[];
  BrandsList:any=[];
  minValue: number = 0;
  maxValue: number = 10000;
  orderby:any="";
<<<<<<< HEAD
  start:any="";
  last:any="";
  title:any;
  menuList:any;
  selected:any;
  subSelected:any;
=======
  
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
  options: Options = {
    floor: 0,
    ceil: 10000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min:</b> AED" + value;
        case LabelType.High:
          return "<b>Max:</b> AED" + value;
        default:
          return "$" + value;
      }
    }
  };
<<<<<<< HEAD
  constructor(private route:ActivatedRoute,private sharedService:SharedService,private router:Router) {
    localStorage.setItem('variationselectvalue', "");
   }
=======
  constructor(private route:ActivatedRoute,private sharedService:SharedService,private router:Router) { }
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
  ngafterviewinit() {
    window.scroll(0,0)
   }
  ngOnInit(): void {
  
<<<<<<< HEAD
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
=======
    
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
    this.sub = this.route.params.subscribe(params => {
      this.categoryname = params['name']; // (+) converts string 'id' to a number
  
    this.refreshtable();
    this.CategoriesList();
    this.SubCategoriesList();
    this.getbrand();
   });

  }
  ngAfterViewInit(){
 
  }
  
  refreshtable()
  {
 
    if(this.ProductsListtemp && this.ProductsList.length == 0)
    {
      this.ProductsList=[];
      this.ProductsList=this.ProductsListtemp;
    }
   this.sharedService.getProducts().subscribe(data =>{ 
  
    //console.log(data);
    this.ProductsList = data;
    if(this.categoryname)
    {
      if(this.categoryname.toLowerCase() == "television")
      {
        this.categoryname="televisions";
      }
      this.ProductsList = this.ProductsList.filter((x:any) => x.categoryname.toLowerCase() == this.categoryname.toLowerCase() || x.brandname.toLowerCase() == this.categoryname.toLowerCase() || x.subcategoryname.toLowerCase() == this.categoryname.toLowerCase() || x.name.toLowerCase().includes(this.categoryname.toLowerCase() ) ); 
    }
<<<<<<< HEAD
  
=======
    console.log(this.ProductsList);
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
    for(let i=0; i<=this.ProductsList.length; i++)
    {
    // alert(this.categoryname +""+ this.ProductsList[i].categoryname );
    let priceedit= JSON.parse(this.ProductsList[i].price);
    this.ProductsList[i].price=priceedit["quantities"];
  
    //  this.ProductsList[i].price= JSON.parse(this.ProductsList[i].price);
     this.ProductsList[i].attributevalue= JSON.parse(this.ProductsList[i].attributevalue);
     this.ProductsList[i].variations= JSON.parse(this.ProductsList[i].variations);
 
    }
  
   // console.log(this.ProductsList );
 
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
  getbrand()
  {
   
    this.sharedService.getBrands().subscribe(data =>{
      
      this.BrandsList = data;
  
  

   });    
    
 

  }
  filterbyprice()
  {
    this.ProductsFilterList=[];
   
    if(this.ProductsListtemp.length == 0)
    {    
      
      this.ProductsListtemp=this.ProductsList;}

    this.ProductsList=[];
    for(let i=0; i<=this.ProductsListtemp.length; i++)
    {
    // alert(this.categoryname +""+ this.ProductsList[i].categoryname );
    // let priceedit= JSON.parse(this.ProductsList[i].price);
    // this.ProductsList[i].price=priceedit["quantities"];
    // this.ProductsList[i].price= JSON.parse(this.ProductsList[i].price);
    let boolvalue=false;
    if( this.ProductsListtemp[i]  )
    this.ProductsListtemp[i].price.forEach((element:any )=> {
<<<<<<< HEAD
    
      let pricenum=Number(element.price);
    
=======
      console.log(element);
      let pricenum=Number(element.price);
      console.log(this.minValue + "ss" + this.maxValue + "sss" + pricenum)
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
      if(pricenum >= this.minValue && pricenum <= this.maxValue && boolvalue == false)
      {

        this.ProductsFilterList.push(this.ProductsListtemp[i]);
        boolvalue=true;
      }
    
     });
     
     boolvalue==false;
    }
  this.ProductsList=[];
    this.ProductsList=this.ProductsFilterList;
    if(this.categoryname)
    {
      this.ProductsList = this.ProductsList.filter((x:any) => x.categoryname.toLowerCase() == this.categoryname.toLowerCase() || x.brandname.toLowerCase() == this.categoryname.toLowerCase() || x.subcategoryname.toLowerCase() == this.categoryname.toLowerCase() || x.name.toLowerCase().includes(this.categoryname.toLowerCase() ) ); 
    }
    // this.ProductsFilterList.forEach((element:any )=> {
    //   this.ProductsList.push(element);
    // });
<<<<<<< HEAD


  }

  SortBy(value:any)
  {
    alert();
  this.orderby=value;

  }
  listCount(count:any) {
 
    this.start = count;
    this.start = this.start * 10 - 9;
    this.last = count * 10;
    if (this.last > this.ProductsList.length) {
      this.last = this.ProductsList.length;
    }
    console.log('start'+ '      '+this.start + '      '+'last' + '      '+ this.last);
   
  }
  subload(value:string)
  {
    this.router.navigate(['/products/'+value]);
    location.reload() 
  }

=======
    console.log(this.ProductsList+ "/////////////////");

  }
  SortBy(value:any)
  {
  this.orderby=value;

  }
  
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
}
