import { Component, OnInit } from '@angular/core';
import { Router,Params  } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  categoryList:any=[];
  subcategoryList:any=[];
  BrandsList:any=[];
  constructor(private sharedService:SharedService,private router:Router) { }

  ngOnInit(): void {
    this.CategoriesList();
    this.SubCategoriesList();
    this.getbrand();
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
}
