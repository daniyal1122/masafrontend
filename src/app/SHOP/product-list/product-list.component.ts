import { Component, OnInit } from '@angular/core';
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
  constructor(private route:ActivatedRoute,private sharedService:SharedService,private router:Router) { }
  ngafterviewinit() {
    window.scroll(0,0)
   }
  ngOnInit(): void {
  
    
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
    console.log(this.ProductsList);
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
      console.log(element);
      let pricenum=Number(element.price);
      console.log(this.minValue + "ss" + this.maxValue + "sss" + pricenum)
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
    console.log(this.ProductsList+ "/////////////////");

  }
  SortBy(value:any)
  {
  this.orderby=value;

  }
  
}
