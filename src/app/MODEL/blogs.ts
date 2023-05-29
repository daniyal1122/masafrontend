export class Blogs {
    blogid:number;
    title: string;
    image: string;
    desc:string;
    metatitle:string;
    metdesc:string;
    keywords:string;
   constructor( blogid : number,title: string,image: string  ,desc:string,metatitle: string ,metadesc: string ,keywords:string) {
 
       this.blogid=blogid;
       this.title = title;    
       this.image=image;
       this.desc = desc;
       this.metatitle=metatitle;
       this.metdesc=metadesc;
       this.keywords=keywords;

     }
}
