import { Component, OnInit, ViewChild, ElementRef,ViewEncapsulation   } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Products } from 'src/app/Model/products';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import * as myGlobals from 'src/app/Global/global';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-brandshome',
  templateUrl: './brandshome.component.html',
<<<<<<< HEAD
<<<<<<< HEAD
  styleUrls: ['./brandshome.component.css'],
  
=======
  styleUrls: ['./brandshome.component.css']
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
=======
  styleUrls: ['./brandshome.component.css']
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
})
export class BrandshomeComponent implements OnInit {

  id:number=0;
  private sub: any;
  brandimage:any="";
  brandtext:any="";
  brandname:any="";
  BrandsList:any=[];
  brandlisttemp:any=[];
  imageurl:string=myGlobals.imageurl;
  categoryList:any=[]; ProductsList: any =[];
  checkvalue:string="false";
  constructor( private route:ActivatedRoute,private sharedService:SharedService,private viewportScroller: ViewportScroller,private router:Router,private _sanitizer: DomSanitizer) {

   }

  ngOnInit(): void {
 
    window.scrollTo(0, 0)
    this.CategoriesList();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    
      
      this.BrandsList=[];
  this.brandlisttemp=[];
  this.sharedService.getbrandsbyid(this.id).subscribe(data =>{
   
    this.BrandsList = data;

    
  
     this.brandname=this.BrandsList.name;
     this.brandimage=this.BrandsList.image;
     this.brandtext=this.BrandsList.details;
    
 });  
  
   });
   this.refreshtable();
  }
  ngAfterViewInit(){
    this.refreshtable();
  }
  

  CategoriesList() {
    this.sharedService.getCategories().subscribe(data =>{
    this.categoryList = data;
    });    

  }
  refreshtable()
  {
 

   this.sharedService.getProducts().subscribe(data =>{ 
  
    //console.log(data);
    this.ProductsList = data;
 
      this.ProductsList = this.ProductsList.filter((x:any) => x.brandname.toLowerCase() == this.brandname.toLowerCase()  ); 
    
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
}
