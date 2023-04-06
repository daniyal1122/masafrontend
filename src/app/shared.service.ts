import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable,BehaviorSubject } from 'rxjs';
import { Products } from './Model/products';
import * as myGlobals from 'src/app/Global/global';
import { Cart } from './MODEL/cart';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = myGlobals.serviceurl;
  //readonly APIUrl = "https://localhost:7234/api/";
    //LIVE URL
   // readonly APIUrl = "http://64.20.61.114/MASAB2B/api/";
  constructor(private httpClient: HttpClient,private router:Router) { }

  getProducts(): Observable < any[] > {
    

    return this.httpClient.get <any> (this.APIUrl + 'Products/GetAllProducts');
}
GetbyIDProducts(value:any)
{
  return this.httpClient.get(this.APIUrl + 'Products/GetByIdProducts?id='+ value);
}
GetbyModelnoProducts(value:any)
{
  return this.httpClient.get(this.APIUrl + 'Products/GetByModelnoProducts?id='+ value);
}
getSubCategories(){
  return this.httpClient.get(this.APIUrl + 'Settings/GetAllSubCategories');
}
getCategories(){
  return this.httpClient.get(this.APIUrl + 'Settings/GetAllCategories');
}

// ORDER SERVICES
postOrders(value:any)  {
  
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json;charset=utf-8');
  headers.append('Accept', 'application/json');
  console.log(value);
  return this.httpClient.post(this.APIUrl + 'Order/SaveOrders',value,{headers: headers} );
  
}

// ORDER SERVICES
postOrdersItems(value:Cart[])  {
  
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json;charset=utf-8');
  headers.append('Accept', 'application/json');
  console.log(value);
  return this.httpClient.post(this.APIUrl + 'Order/SaveOrdersItems',value,{headers: headers} );
  
}

//brands
getBrands(){
  return this.httpClient.get(this.APIUrl + 'Settings/GetAllBrands');
}
getbrandsbyid(id:any)
{
  return this.httpClient.get(this.APIUrl + 'settings/GetByIdBrands?id='+ id);
}

// banners

getBanners(){
  return this.httpClient.get(this.APIUrl + 'Settings/GetAllBanners');
}
// Deals

getBannersdod(){
  return this.httpClient.get(this.APIUrl + 'Settings/GetAllBannersdod');
}
// Users

postUsers(value:any)  {
   
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json;charset=utf-8');
  headers.append('Accept', 'application/json');
  return this.httpClient.post(this.APIUrl + 'Settings/SaveUserss',value,{headers: headers} );
  
}

getUsers(){
  return this.httpClient.get(this.APIUrl + 'Settings/GetAllUsers');
}
deleteUsers(value:any)
{
  return this.httpClient.get(this.APIUrl + 'Settings/DeleteUserss?id='+ value);
}
GetbyIDUsers(value:any)
{
  return this.httpClient.get(this.APIUrl + 'Settings/GetByIdUsers?id='+ value);
}
getUserLogin(value:any)  {
   
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json;charset=utf-8');
  headers.append('Accept', 'application/json');
  return this.httpClient.post(this.APIUrl + 'Settings/GetUserByEmail',value,{headers: headers} );
  
}

// contacts

postContacts(value:any)  {
   
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json;charset=utf-8');
  headers.append('Accept', 'application/json');
  return this.httpClient.post(this.APIUrl + 'Settings/SaveContacts',value,{headers: headers} );
  
}

getContacts(){
  return this.httpClient.get(this.APIUrl + 'Settings/GetAllContacts');
}
deleteContacts(value:any)
{
  return this.httpClient.get(this.APIUrl + 'Settings/DeleteContacts?id='+ value);
}
GetbyIDContacts(value:any)
{
  return this.httpClient.get(this.APIUrl + 'Settings/GetByIdContact?id='+ value);
}
  // ORDERS
  getOrders(){
    return this.httpClient.get(this.APIUrl + 'Order/GetAllOrders');
  }
  getOrdersItems(value:any){
    return this.httpClient.get(this.APIUrl + 'Order/GetByIdOrdersItems?id='+value);
  }

  // blogs

  getBlogs(){
    return this.httpClient.get(this.APIUrl + 'Settings/GetAllBlogs');
  }
  GetbyIDBlogs(value:any)
  {
    return this.httpClient.get(this.APIUrl + 'Settings/GetByIdBlogss?id='+ value);
  }
}


