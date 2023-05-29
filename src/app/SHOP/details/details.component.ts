import { Component, OnInit, ViewChild, ElementRef,ViewEncapsulation   } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Products } from 'src/app/Model/products';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import * as myGlobals from 'src/app/Global/global';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Cart } from 'src/app/MODEL/cart';
import { HeaderComponent } from 'src/app/header/header.component';
import { CartService } from 'src/app/Services/cart.service';
import * as JSPdf from 'jspdf'; 
import html2canvas from "html2canvas";
import Swal from 'sweetalert2';
import { DomSanitizer, SafeHtml,Title,Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[HeaderComponent ],
  encapsulation: ViewEncapsulation.None,
  
})
export class DetailsComponent implements OnInit {
  // @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  imageurl=myGlobals.imageurl;
  id: number=0;
  private sub: any;
<<<<<<< HEAD
  qtyselected:any="100";
=======
  qtyselected:any="";
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
  ProductObj:any=Products;
  title:string="";
  price:string="";
  qty:string="";
  brands:string="";
  brandname:string="";
  shortdesc:SafeHtml="";
  longdesc:SafeHtml="";
  spec:SafeHtml="";
  specificationright:SafeHtml="";
  categories:string="";
  categoryname:string="";
  subcategories:string="";
  subcategoryname:string="";
  obj:any= Cart;
  singleimage:string="";
  multiimage:string="";
  productID:string="";
  imageUrl:string="";
  cbm:string="";
  reloadvalue:string="";
imageUrl2:string="";
imageaddfirst:string="";
priceedit:any=JSON;
pricevalue:any=JSON;
attributes:any=JSON;
attributevalue:any=JSON;
ProductsList: any =[];
ProductsListrelated: any =[];
modelno:string="";
variationarry:any=[];
variationkey:any=[];
variationvalue:any=[];
finalvariationarray:any=[];
productidcurrent:string="";
addclass="";
cartobj:any= Cart;
moq:number=0;
metatitle:string="";
metadesc:string="";
<<<<<<< HEAD
variationselectvalue:any=localStorage.getItem('variationselectvalue') ;
variationpreselected:any="";
=======

>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
customOptions: OwlOptions = {
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
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
  nav: false
}
customOptions1: OwlOptions = {
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
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
  nav: false
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
      items: 2
    },
    940: {
      items: 5
    }
  },
  nav: true
}
  constructor(private route:ActivatedRoute,private sharedService:SharedService,private viewportScroller: ViewportScroller,private router:Router,private comp: HeaderComponent, private cartService: CartService,private _sanitizer: DomSanitizer,  private titleService: Title,  
    private metaTagService: Meta,private readonly activatedRoute: ActivatedRoute  ) {
<<<<<<< HEAD

      this.variationselectvalue=localStorage.getItem('variationselectvalue') ;
=======
    
   
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
        this.titleService.setTitle(this.metatitle);
        this.metaTagService.updateTag({ name: 'title', content:  this.metatitle  })
  this.metaTagService.updateTag({ name: 'description', content:  this.metadesc  })
  

   }

   ngafterviewinit() {
    window.scroll(0,0)
   }

  ngOnInit(): void {
<<<<<<< HEAD
    
=======
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
    window.scroll(0,0)
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['id']);
   var getid= sessionStorage.getItem('detailid');
    
    this.sub = this.route.params.subscribe(params => {
      if(getid !== params['id'] )
{
  sessionStorage.setItem('detailid', params['id']);
window.location.reload();
}
      this.id = +params['id']; // (+) converts string 'id' to a number
     
      
      this.sharedService.GetbyIDProducts(this.id).subscribe(res => {

        this.ProductObj = res;
       
        this.title=this.ProductObj.name;
        this.price=this.price;
        this.productidcurrent=this.ProductObj.product_ID;
        this.brands=this.ProductObj.brand_id;
        this.metadesc=this.ProductObj.metadesc;
        this.metatitle=this.ProductObj.metatitle;
        this.brandname=this.ProductObj.brandname.toUpperCase();
        this.shortdesc= this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.shortdesc);
        this.longdesc= this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.longdesc);
        this.spec=this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.specification);
        this.specificationright=this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.specificationright);
        this.categories=this.ProductObj.category_id;
        this.categoryname=this.ProductObj.categoryname;
        this.subcategories=this.ProductObj.subid;
        this.moq=this.ProductObj.minqty;
        this.subcategoryname=this.ProductObj.subcategoryname;
        this.imageUrl=this.ProductObj.singleImage;
        this.imageaddfirst=this.ProductObj.images.split(',');
     
      let imagetempadd="";
      let imagetempadd1="";

        let p =0;
        imagetempadd=this.ProductObj.singleImage;
        this.ProductObj.images.split(',').forEach((element:any) => {
         
      
           imagetempadd= imagetempadd + ","+ element;
      
        
        
        });
      
       imagetempadd1=JSON.stringify(imagetempadd.split(','));
        this.imageUrl2 = JSON.parse(imagetempadd1);
        this.productID=this.ProductObj.product_ID;
        this.modelno=this.ProductObj.modelno.toUpperCase();
        this.cbm=this.ProductObj.cbm;
        this.priceedit= JSON.parse(this.ProductObj.price);
        this.pricevalue=this.priceedit["quantities"];
        this.attributes=JSON.parse(this.ProductObj.attributevalue);
        this.attributevalue=this.attributes["attributesdynamic"];
<<<<<<< HEAD
        this.ProductObj.variations=<any> JSON.parse( <any> this.ProductObj.variations);
  
        let ver=<any> this.ProductObj.variations;
        let vervalue=ver["variationdynamic"];
        
       
       //to seperate size and color strings
       for (let item in vervalue) {

      //  console.log(vervalue[item].key+"----------"+vervalue[item].value);
       this.variationpreselected=vervalue[item].value
   }
=======
      
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
        this.refreshtable(this.ProductObj.modelno);
        // this.variationbuttons();
  
 });
  
   });
  //  this.titleService.setTitle(this.metatitle);  
 

setTimeout(()=>{       
                      // <<<---using ()=> syntax
                      this.titleService.setTitle(this.metatitle);
                      this.metaTagService.updateTag({ name: 'title', content:  this.metatitle  })
  this.metaTagService.updateTag({ name: 'description', content:  this.metadesc  })
  
}, 3000);
this.relatedproducts();
  }
 
  ngAfterViewInit(){
    setTimeout(()=>{       
      // <<<---using ()=> syntax
      this.titleService.setTitle(this.metatitle);
      this.metaTagService.updateTag({ name: 'title', content:  this.metatitle  })
this.metaTagService.updateTag({ name: 'description', content:  this.metadesc  })

}, 3000);
  }

  refreshtable(value:any)
  {
    
    this.sharedService.GetbyModelnoProducts(value).subscribe(data =>{ 
  
      this.ProductsList = data;
     for(let i=0; i<=this.ProductsList.length; i++)
     {
      this.ProductsList[i].price=  JSON.parse( <any> this.ProductsList[i].price);
     this.ProductsList[i].attributevalue=<any> JSON.parse( <any> this.ProductsList[i].attributevalue);
     this.ProductsList[i].variations=<any> JSON.parse( <any> this.ProductsList[i].variations);
  
     let ver=<any> this.ProductsList[i].variations;
     let vervalue=ver["variationdynamic"];
<<<<<<< HEAD
     
=======
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
     this.variationarry.push(vervalue);
    //to seperate size and color strings
    for (let item in vervalue) {
    // console.log(vervalue[item].key+"----------"+vervalue[item].value);
    let vargot="false";
    for(let j=0;j<=this.variationkey.length;j++)
    {
      if(this.variationkey[j] ==vervalue[item].key )
      {
       vargot="true";
      }
         }
  if(vargot == "false")
  {
    
  this.variationkey.push(vervalue[item].key);
 
  }  

}
   }
     });  


  }
    
  relatedproducts()
  {
 
 
   this.sharedService.getProducts().subscribe(data =>{ 
  
    //console.log(data);
    this.ProductsListrelated = data;
    if(this.categoryname)
    {
      this.ProductsListrelated = this.ProductsListrelated.filter((x:any) => x.categoryname.toLowerCase() == this.categoryname.toLowerCase()  ); 
    }
<<<<<<< HEAD
   
=======
    console.log(this.ProductsListrelated);
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
    for(let i=0; i<=this.ProductsListrelated.length; i++)
    {
    // alert(this.categoryname +""+ this.ProductsList[i].categoryname );
    let priceedit= JSON.parse(this.ProductsListrelated[i].price);
    this.ProductsListrelated[i].price=priceedit["quantities"];
  
    //  this.ProductsList[i].price= JSON.parse(this.ProductsList[i].price);
     this.ProductsListrelated[i].attributevalue= JSON.parse(this.ProductsListrelated[i].attributevalue);
     this.ProductsListrelated[i].variations= JSON.parse(this.ProductsListrelated[i].variations);
 
    }
  
   // console.log(this.ProductsList );
 
 }); 


    
<<<<<<< HEAD
 
=======
      console.log("1st sections");
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7

  }
  veriationchange(modelno:string,value:string)
  {
    
<<<<<<< HEAD
    this.variationselectvalue=null;
    localStorage.setItem('variationselectvalue', value);

    this.variationselectvalue=localStorage.getItem('variationselectvalue') ;
=======
   
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
    for(let i=0; i<=this.ProductsList.length; i++)
    {
//  this.ProductsList[i].variations= JSON.parse(this.ProductsList[i].variations);
    // console.log(this.ProductsList[i].id);
    let ver= this.ProductsList[i].variations;
    let vervalue=ver["variationdynamic"];

   //to seperate size and color strings
<<<<<<< HEAD
   
   if(this.ProductsList[i].product_ID != this.productidcurrent)
   {  
    
=======
   console.log(this.ProductsList[i].product_ID );
   console.log(this.productidcurrent);
   if(this.ProductsList[i].product_ID != this.productidcurrent)
   {  
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
   for (let item in vervalue) {


         if(value ==vervalue[item].value && this.ProductsList[i].modelno == modelno  )
      {
       this.sharedService.GetbyIDProducts(this.ProductsList[i].product_ID).subscribe(res => {
        this.ProductObj = res;
<<<<<<< HEAD
        let url: string = "/details/" + this.ProductObj.product_ID
        this.router.navigateByUrl(url);
        // this.title=this.ProductObj.name;
        // this.price=this.price;
        // this.productidcurrent=this.ProductObj.product_ID;
        // this.brands=this.ProductObj.brand_id;
        // this.brandname=this.ProductObj.brandname;
        // this.shortdesc= this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.shortdesc);
        // this.longdesc= this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.longdesc);
        // this.spec=this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.specification);
        // this.specificationright=this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.specificationright);
        // this.moq=this.ProductObj.minqty;
       
        // this.categories=this.ProductObj.category_id;
        // this.categoryname=this.ProductObj.categoryname;
        // this.subcategories=this.ProductObj.subid;
        // this.subcategoryname=this.ProductObj.subcategoryname;
        // this.imageUrl=this.ProductObj.singleImage;
        // this.imageaddfirst=this.ProductObj.images.split(',');
   
        // let imagetempadd="";
        // let imagetempadd1="";
  
        //   let p =0;
        //   imagetempadd=this.ProductObj.singleImage;
        //   this.ProductObj.images.split(',').forEach((element:any) => {
           
        
        //      imagetempadd= imagetempadd + ","+ element;
        
          
          
        //   });
        
        //  imagetempadd1=JSON.stringify(imagetempadd.split(','));
        //   this.imageUrl2 = JSON.parse(imagetempadd1);
        // this.productID=this.ProductObj.product_ID;
        // this.modelno=this.ProductObj.modelno;
        // this.cbm=this.ProductObj.cbm;
        // this.priceedit= JSON.parse(this.ProductObj.price);
        // this.pricevalue=this.priceedit["quantities"];
        // this.attributes=JSON.parse(this.ProductObj.attributevalue);
        // this.attributevalue=this.attributes["attributesdynamic"];
        
        // this.variationkey=[];
        // this.variationarry=[];
       
        //  this.refreshtable(this.ProductObj.modelno);
//         var getid= sessionStorage.getItem('detailid');
 
//         if(getid !== this.ProductObj.product_ID  )
// {
//   sessionStorage.setItem('detailid', this.ProductObj.product_ID );
// window.location.reload();
// }
=======
       
        this.title=this.ProductObj.name;
        this.price=this.price;
        this.productidcurrent=this.ProductObj.product_ID;
        this.brands=this.ProductObj.brand_id;
        this.brandname=this.ProductObj.brandname;
        this.shortdesc= this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.shortdesc);
        this.longdesc= this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.longdesc);
        this.spec=this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.specification);
        this.specificationright=this._sanitizer.bypassSecurityTrustHtml(this.ProductObj.specificationright);
        this.moq=this.ProductObj.minqty;
       
        this.categories=this.ProductObj.category_id;
        this.categoryname=this.ProductObj.categoryname;
        this.subcategories=this.ProductObj.subid;
        this.subcategoryname=this.ProductObj.subcategoryname;
        this.imageUrl=this.ProductObj.singleImage;
        this.imageaddfirst=this.ProductObj.images.split(',');
   
        let imagetempadd="";
        let imagetempadd1="";
  
          let p =0;
          imagetempadd=this.ProductObj.singleImage;
          this.ProductObj.images.split(',').forEach((element:any) => {
           
        
             imagetempadd= imagetempadd + ","+ element;
        
          
          
          });
        
         imagetempadd1=JSON.stringify(imagetempadd.split(','));
          this.imageUrl2 = JSON.parse(imagetempadd1);
        this.productID=this.ProductObj.product_ID;
        this.modelno=this.ProductObj.modelno;
        this.cbm=this.ProductObj.cbm;
        this.priceedit= JSON.parse(this.ProductObj.price);
        this.pricevalue=this.priceedit["quantities"];
        this.attributes=JSON.parse(this.ProductObj.attributevalue);
        this.attributevalue=this.attributes["attributesdynamic"];
        
        this.variationkey=[];
        this.variationarry=[];
        this.refreshtable(this.ProductObj.modelno);
        
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
        // this.variationbuttons();
  
 }); 
      }
 

}
}
  }

  }
  SavetoCart(id:string,qty:string,price:any,cbm:string)
  {
  
    if(qty)
    {
 
      if(Number(qty) >= Number(this.moq) )
      {      let finalprice=0;
        var keepGoing = true;
       let lastvalue=price.length -1;
        for(let i = 0;i<price.length;i ++)
        {
         // var lastIndex = price[0].qty.lastIndexOf(" ");
     
         let lastWord =price[i].qty;
         let arr = lastWord.split(' ');
       arr= arr[arr.length - 1];
       if(keepGoing) {
     if(Number(qty)<= Number(arr))
     {
     
         finalprice =Number(Number(qty) *  Number(price[i].price));
     
         keepGoing = false;
     
     }
     
     }
     if(keepGoing) {
     if(Number(qty)>= 1000)
     {
       
       finalprice =Number(Number(qty) *  Number(price[lastvalue].price));
      
       keepGoing = false;
     }
     }
     
        }
       let totalcbm=Number(cbm) * Number(qty);
          this.cartobj = new Cart(Number("0"),this.title,this.productID,this.imageUrl,String(qty),String(finalprice),cbm,String(totalcbm),Number("0"),String(this.productID),String("0"));
          this.cartService.addToCart(this.cartobj);
         this.cartService.subtotalcalution();
         Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
         
          timer: 5000,
          title: 'Cart Updated'
        })
        }
         else
         {
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            icon: 'warning',
           
            timer: 5000,
            title: 'Quantity should be greater than or equal to :'+ this.moq 
          })
          // alert("Quantity should be greater than or equal to :" + this.moq);
         }

     
    }

    else
    {
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'warning',
       
        timer: 5000,
        title: 'Please Select Quantity.' 
      })
    
    
    }

  // this.comp.ngOnInit();

    
  }
  // public captureScreen(value:any) {
  //   // var data = document.getElementById("contentToConvert")!;
  //   // html2canvas(data).then(canvas => {
  //   //   // Few necessary setting options
  //   //   var imgWidth = 208;
  //   //   var pageHeight = 295;
  //   //   var imgHeight = (canvas.height * imgWidth) / canvas.width;
  //   //   var heightLeft = imgHeight;

  //   //   const contentDataURL = canvas.toDataURL("image/png");
  //   //   let pdf = new JSPdf.jsPDF("p", "mm", "a4"); // A4 size page of PDF
  //   //   var position = 0;
  //   //   pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      
  //   //   pdf.save(value+".pdf"); // Generated PDF
  //   // });

    
  // }
 public captureScreen(value:any) {
    var data = document.getElementById("contentToConvert")!;
    // html2canvas(data, {
    //   allowTaint: false,
    //   removeContainer: true,
    //   backgroundColor: '#ffffff',
    //   scale: window.devicePixelRatio,
    //   useCORS: false
    // }).then(canvas => {
    //   const contentDataURL = canvas.toDataURL('image/png')
    //   const imgWidth = 210;
    //   const pageHeight = 295;
    //   const imgHeight = canvas.height * imgWidth / canvas.width;
    //   let heightLeft = imgHeight;
    //   let pdf = new JSPdf.jsPDF("p", "mm", "a4");  // A4 size page of PDF
    //   let position = 5;
    
    //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    //   heightLeft -= pageHeight;
    
    //   while (heightLeft >= 0) {
    //     position = heightLeft - imgHeight;
    //     pdf.addPage();
    //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    //     heightLeft -= pageHeight;
    //   }
    //   while (heightLeft >= 0) {
    //     position = heightLeft - imgHeight;
    //     pdf.addPage();
    //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    //     heightLeft -= pageHeight;
    //   }
    //   // pdf.save(value+".pdf"); // Generated PDF
    // });
    html2canvas(data, {
      allowTaint: false,
      removeContainer: true,
      backgroundColor: '#ffffff',
      scale: window.devicePixelRatio,
      useCORS: false
    }).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let pdf = new JSPdf.jsPDF("p", "mm", "a4");  // A4 size page of PDF
      let position = 70;
      pdf.text(value, 1, 5);
     
      pdf.addImage(myGlobals.imageurl+this.imageUrl, 'JPEG', 0, 10, 70, 70)
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight;
      }
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight;
      }
      pdf.save(value+".pdf"); // Generated PDF
    });
    }
    redirectTo(id:any){
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/details', { id: id }]));
   }


}
