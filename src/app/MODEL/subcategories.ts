
import { Categories } from "./categories";
export class Subcategories {
    private name: string;
   private categoryname:string;
    private Subid: number;
    private category_id: number;
    private categories=new Categories("",0);
    constructor(name: string,id:number,category_id:number,categoryname:string) {
        this.name = name;
        this.category_id=category_id
        this.Subid=id;
        this.categoryname=categoryname;

      }
}
