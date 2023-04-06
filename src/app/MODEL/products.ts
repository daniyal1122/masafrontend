import { Brands } from "./brands";
import { Categories } from "./categories";
import { Subcategories } from "./subcategories";

export class Products {
    private name: string;
    private Product_ID:number;
    private Subid:number;
    private category_id:number;
    private price:string;
    private brand_id:number;
    private specification:string;
    private singleimage:string;
    private images:string;
    private shortdesc:string;
    private longdesc:string;
    private Attributevalue:string;
    private variations:string;
    private categories=new Categories("",0);
    private subcategories=new Subcategories("",0,0,"");
    private brands=new Brands("",0);

    private brandname:string;
    private categoryname:string;
    private subcategoryname:string;
    constructor(name: string,Product_ID:number,productcategory:number,subcategoryid:number,subcategoryname:string,price:string,brand:number,specification:string,images:string,singleimage:string,shortdesc:string,longdesc:string,Attributevalue:string,brandname:string,categoryname:string,variations:string) {
        this.name = name;
        this.category_id=productcategory;
        this.Subid=subcategoryid;
        this.price=price;
        this.brand_id=brand;
        this.specification=specification;
        this.images=images;
        this.singleimage=singleimage;
        this.shortdesc=shortdesc;
        this.longdesc=longdesc;
        this.Product_ID=Product_ID;
        this.variations=variations;
        this.Attributevalue=Attributevalue;
        this.brandname=brandname;
        this.categoryname=categoryname;
        this.subcategoryname=subcategoryname
        this.brands = new Brands(brandname,this.brand_id);
        this.subcategories=new Subcategories(subcategoryname,subcategoryid,productcategory,categoryname);
        this.categories=new Categories(categoryname,this.category_id);
    }
}
