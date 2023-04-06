import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategories'
})
export class FilterCategoriesPipe implements PipeTransform {

  transform(value: any, catname:string) {
 
    if(catname !="")
    {return value.filter((v:any) => v.categoryname.toLowerCase() == catname.toLowerCase());}
    else
    {

      return value;
    }
    
    
  }

}
