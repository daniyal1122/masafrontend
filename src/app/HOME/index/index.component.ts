import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';

import { Products } from 'src/app/Model/products';
import { SharedService } from 'src/app/shared.service';

import { OwlOptions } from 'ngx-owl-carousel-o';
import * as myGlobals from 'src/app/Global/global';
import { filter,take } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],

})

export class IndexComponent implements OnInit {
  ProductsList: any =[];
  televisionlist : any =[];
  aclist : any =[];
  homeappliancelist : any =[];
  fridgeappliancelist : any =[];
  brandimage:any="";
  brandtext:any="";
  brandname:any="";
  BrandsList:any=[];
  brandlisttemp:any=[];
  imageurl:string=myGlobals.imageurl;
  BannersList:any=[];
  DodList:any=[];
  brand_id="";
  b1:any="";
  b2:any="";
  b3:any="";
  b4:any="";
  b5:any="";
  b6:any="";
  
  bvalue1:any="";
  bvalue2:any="";
  bvalue3:any="";
  bvalue4:any="";
  bvalue5:any="";
  bvalue6:any="";
  btype1:any="";
  btype2:any="";
  btype3:any="";
  btype4:any="";
  btype5:any="";
  btype6:any="";

  product1:any="";
  product2:any="";
  product3:any="";
  product4:any="";
  product5:any="";
  product6:any="";
value:any="";

   dealofday:any=new Array<Products>();
  // bestseller:any[];
  // newarrival:any=[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='ion-ios-arrow-left' ></i>","<i class='ion-ios-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 5
      },
      940: {
<<<<<<< HEAD
<<<<<<< HEAD
        items: 5,
=======
        items: 5
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
=======
        items: 5
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
      }
    },
    nav: true
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='ion-ios-arrow-left' ></i>","<i class='ion-ios-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
<<<<<<< HEAD
<<<<<<< HEAD
    dots: false,
=======
    dots: true,
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
=======
    dots: true,
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
    navSpeed: 700,
    navText: ['<i style="" class="fa fa-angle-left"></i>','<i style="font-size: 80px;position: absolute;top: 185px;left:0px;" class="fa fa-angle-right"></i>'],
    // navText: [
    //   '<i class="ti-angle-left"></i>',
    //   '<i class="ti-angle-right"></i>',
    // ],
   
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  customOptions4: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    items:4,
    navText: ["<i class='ion-ios-arrow-left' ></i>","<i class='ion-ios-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  // customOptions3: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ["<i class='ion-ios-arrow-left' ></i>","<i class='ion-ios-arrow-right'></i>"],
  //   responsive: {
  //     0: {
  //       items: 4
  //     },
  //     400: {
  //       items: 4
  //     },
  //     740: {
  //       items: 4
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
  constructor(public sharedService: SharedService) {
    

   }
 
   ngOnInit(): void {

    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.getbrandbyname("evvoli");
    }, 1000);

    this.refreshtable();
    this.getallbanners();
    this.getallbannersdod();
  }
  refreshtable()
  {
    this.sharedService.getProducts().subscribe(data =>{ 
<<<<<<< HEAD
<<<<<<< HEAD
     
=======
      console.log(data);
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
=======
      console.log(data);
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
      let tvcount=0;
      this.televisionlist=this.ProductsList.filter(
       (obj:any) => obj.categoryname === "TELEVISIONS");
       this.aclist=this.ProductsList.filter(
        (obj:any) => obj.categoryname === "AIR CONDITIONERS");
        this.homeappliancelist=this.ProductsList.filter(
          (obj:any) => obj.categoryname === "HOME APPLICANCES");
          this.fridgeappliancelist=this.ProductsList.filter(
            (obj:any) => obj.categoryname === "REFIGERATORS");
      this.ProductsList = data;
     for(let i=0; i<=this.ProductsList.length; i++)
     {

      if(this.ProductsList[i].price && this.ProductsList[i].price != undefined && this.ProductsList[i].price != [] )
      {    let priceedit= JSON.parse(this.ProductsList[i].price);
        this.ProductsList[i].price=priceedit["quantities"];
      }
  
    
     this.ProductsList[i].attributevalue= JSON.parse(this.ProductsList[i].attributevalue);
     this.ProductsList[i].variations= JSON.parse(this.ProductsList[i].variations);

    //  if(this.ProductsList[i].dod == "true")
    //  {

    //   this.dealofday.push(this.ProductsList[i]);
     
    //  }
     }
  
   });  

 
    // this.televisionlist=this.televisionlist.take(1);
  }
  getbrandbyname(value:any)
  {

    this.BrandsList=[];
    this.brandlisttemp=[];
    this.sharedService.getBrands().subscribe(data =>{
      
      this.BrandsList = data;
  
       this.brandlisttemp=this.BrandsList.filter((x:any) => x.name.toLowerCase() == value); 
       this.brand_id=this.brandlisttemp[0].brand_ID;

       this.brandname=this.brandlisttemp[0].name;
       this.brandimage=this.brandlisttemp[0].image;
       this.brandtext=this.brandlisttemp[0].details;
   });    


  //  this.brandlisttemp.forEach((element :any) => {
   
  //   this.brandname=element.name;
  //   this.brandimage=element.image;
  //   this.brandtext=element.details;

  //  });

  }
  getallbanners()
  {
    this.sharedService.getBanners().subscribe(data =>{
      
      this.BannersList = data;
      this.BannersList.forEach((element:any) => {
        if(element.bnum == "1")
        {
         
          if(element.productid)
          {
            this.product1=element.productid;
          }
          else
          {
            this.bvalue1= element.value;
          }
          
            this.b1=element.image;
            this.btype1=element.type;

        }
        if(element.bnum == "2")
        {
          if(element.productid)
          {
            this.product2=element.productid;
          }
          else
          {
            this.bvalue2= element.value;
          }
          
            this.b2=element.image;
            this.btype2=element.type;
        }
        if(element.bnum == "3")
        {
          if(element.productid)
          {
            this.product3=element.productid;
          }
          else
          {
            this.bvalue3= element.value;
          }
          
            this.b3=element.image;
            this.btype3=element.type;
        }
        if(element.bnum == "4")
        {
          if(element.productid)
          {
            this.product4=element.productid;
          }
          else
          {
            this.bvalue4= element.value;
          }
          
            this.b4=element.image;
            this.btype4=element.type;
        }
        if(element.bnum == "5")
        { if(element.productid)
          {
            this.product5=element.productid;
          }
          else
          {
            this.bvalue5= element.value;
          }
          
            this.b5=element.image;
            this.btype5=element.type;}
            if(element.bnum == "6")
            { if(element.productid)
              {
                this.product6=element.productid;
              }
              else
              {
                this.bvalue6= element.value;
              }
              
                this.b6=element.image;
                this.btype6=element.type;}
      });
   });   
  }
  getallbannersdod()
  {
    this.sharedService.getBannersdod().subscribe(data =>{
      
      this.DodList = data;
      for(let i=0; i<=this.DodList.length; i++)
      {
 
           let priceedit= JSON.parse(this.DodList[i].price);
         this.DodList[i].price=priceedit["quantities"];
         
  
     
      //  this.dealofday.push(this.ProductsList[i]);
      
  
      }
   });   
  }
  ngAfterViewInit(){
 this.refreshtable();
                       // <<<---using ()=> syntax
  this.getbrandbyname("evvoli");

  }

}
