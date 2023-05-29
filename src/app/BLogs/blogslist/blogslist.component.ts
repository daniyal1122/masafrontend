
import { Attribute, Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router'; 
import { Blogs } from 'src/app/MODEL/blogs';

import * as myGlobals from 'src/app/Global/global';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-blogslist',
  templateUrl: './blogslist.component.html',
  styleUrls: ['./blogslist.component.css']
})
export class BlogslistComponent implements OnInit {

  BlogsList:any = [];
  Blogsdata:any=[];

  title:string="";
  desc:string="";
  metatitle:string="";
  metadesc:string="";
  keywords:string=""
  obj:any=Blogs;
  id:string="";
  userForm: any;
  
  image:string="";
  ckeConfig: any; 
  imageUrl:string="";
  imageUrl3:string="";
  imagelinkurl:any="";
  fileToUpload:any=File;
  res:any;
  imagearray:any=[];
  constructor(private sharedService: SharedService,private router: Router,private formBuilder: FormBuilder) { 
    this.imagelinkurl=myGlobals.imageurl;

  }
  ngafterviewinit() {
    window.scroll(0,0)
   }
  ngOnInit(): void {
    this.ckeConfig = {    
      allowedContent: true,    
      extraPlugins: 'sourcedialog',  
      removePlugins : 'sourcearea',
      forcePasteAsPlainText: false    
    }; 
    this.refreshBlogsList();
  }
  refreshBlogsList() {
    this.sharedService.getBlogs().subscribe(data =>{
      
       this.BlogsList = data;

    });    
  }
  Edit(value:any) {
    this.sharedService.GetbyIDBlogs(value).subscribe(data=>{
     this.BlogsList=data;
   
  this.id=this.BlogsList.blogid;
  this.title=this.BlogsList.title;
  this.desc=this.BlogsList.desc;
  this.metatitle=this.BlogsList.metatitle;
  this.metadesc=this.BlogsList.metadesc;
  this.keywords=this.BlogsList.keywords;
  this.image=this.BlogsList.image;
  this.imageUrl=this.BlogsList.image;
  this.imagearray.push(JSON.parse(this.imageUrl));
//   alert(this.imageUrl);
//   alert(this.imagelinkurl);
// console.log(this.id);
    });

  }
 


}
