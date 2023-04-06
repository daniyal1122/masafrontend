
import { Attribute, Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router,ActivatedRoute } from '@angular/router'; 
import { Blogs } from 'src/app/MODEL/blogs';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as myGlobals from 'src/app/Global/global';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import { Blogs } from 'src/app/MODEL/blogs';


@Component({
  selector: 'app-blogsdetail',
  templateUrl: './blogsdetail.component.html',
  styleUrls: ['./blogsdetail.component.css']
})
export class BlogsdetailComponent implements OnInit {
  BlogsList:any = [];
  Blogsdata:any=[];

  title:string="";
  desc:SafeHtml="";
  metatitle:string="";
  metadesc:string="";
  keywords:string=""
  obj:any=Blogs;
  id:string="";
  userForm: any;
  ids: number=0;
  private sub: any;
  image:string="";
  ckeConfig: any; 
  imageUrl:string="";
  imageUrl3:string="";
  imagelinkurl:any="";
  fileToUpload:any=File;
  res:any;
  imagearray:any=[];
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
  constructor(private sharedService: SharedService,private router: Router,private formBuilder: FormBuilder,private route:ActivatedRoute,private _sanitizer: DomSanitizer) { 
     this.imagelinkurl=myGlobals.imageurl;

  }
  ngafterviewinit() {
    window.scroll(0,0)
   }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.ids = +params['id']; // (+) converts string 'id' to a number
      var getid= sessionStorage.getItem('blogdetailid');
      this.sharedService.GetbyIDBlogs(this.ids).subscribe(data=>{

        if(getid !== params['id'] )
        {
          sessionStorage.setItem('blogdetailid', params['id']);
        window.location.reload();
        }
        this.BlogsList=data;
      console.log(this.BlogsList);
     this.id=this.BlogsList.blogid;
     this.title=this.BlogsList.title;
     this.desc=this._sanitizer.bypassSecurityTrustHtml(this.BlogsList.desc);
     this.metatitle=this.BlogsList.metatitle;
     this.metadesc=this.BlogsList.metadesc;
     this.keywords=this.BlogsList.keywords;
     this.image=this.BlogsList.image;
     this.imageUrl=this.BlogsList.image;
    //  this.imagearray.push(JSON.parse(this.imageUrl));
   
       });
  
   });
     
this.refreshBlogsList();
  }
  // refreshBlogsList() {
  //   this.sharedService.getBlogs().subscribe(data =>{
      
  //      this.BlogsList = data;

  //   });    
  // }
  // Edit(value:any) {
  //   this.sharedService.GetbyIDBlogs(value).subscribe(data=>{
  //    this.BlogsList=data;
   
  // this.id=this.BlogsList.blogid;
  // this.title=this.BlogsList.title;
  // this.desc=this.BlogsList.desc;
  // this.metatitle=this.BlogsList.metatitle;
  // this.metadesc=this.BlogsList.metadesc;
  // this.keywords=this.BlogsList.keywords;
  // this.image=this.BlogsList.image;
  // this.imageUrl=this.BlogsList.image;
  // this.imagearray.push(JSON.parse(this.imageUrl));

  //   });

  // }
 
  refreshBlogsList() {
    this.sharedService.getBlogs().subscribe(data =>{
      
       this.BlogsList = data;

    });    
  }
}
