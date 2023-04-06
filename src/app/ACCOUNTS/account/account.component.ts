import { Component, OnInit,ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import { Router,Params  } from '@angular/router';
import { ModalManager } from 'ngb-modal';
import { last } from 'rxjs';
import * as myGlobals from 'src/app/Global/global';
import { User } from 'src/app/MODEL/user';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  obj:any=User;
  OrdersList: any =[];
  OrdersList2: any =[];
  orderid:string="";
imageurl:any= myGlobals.imageurl;
  @ViewChild('myModal') myModal:any;
  private modalRef:any;

  firstaname:any;
  lastname:any;
  email:any;
  phone:any;
  country:any;
  totalprice:any;
  totalcbm:any;
  datetime:any;
  address1:any;
  address2:any;
  city:any;
  orderitemslist:any=[];
  firstname1:string="";
  lastname1:string="";
  phone1:string="";
  email1:string="";
  password1:string="";
  usersIDList:any=[];
  usersID:string=JSON.parse(localStorage.getItem('id') || '[]');
  constructor(public sharedService: SharedService,private router :Router,private modalService: ModalManager) { }

  ngOnInit(): void {    
    var id=  JSON.parse(localStorage.getItem('id') || '[]');

    if(id == "")
    {
      this.router.navigate(['/login']);
    }

    this.refreshtable();
    this.Editusers();
    window.scrollTo(0, 0)
  }
  refreshtable()
  {
    var str=  JSON.parse(localStorage.getItem('id') || '[]');
    this.sharedService.getOrders().subscribe(data =>{ 
      console.log(data);
      this.OrdersList=data;
      this.OrdersList2= this.OrdersList.filter(
        (obj:any) => obj.id === Number(str));

   });  
  }
  ViewOrderDetails(orderid:any,firstaname:any,lastname:any,email:any,phone:any,country:any,totalprice:any,totalcbm:any,datetime:any,address1:any,address2:any,city:any)

  {     

    this.orderid=orderid;
    this.firstaname=firstaname;
    this.lastname=lastname;
    this.email=email;
    this.phone=phone;
    this.country=country;
    this.totalprice=totalprice;
    this.totalcbm=totalcbm;
    this.datetime=datetime;
    this.address1=address1;
    this.address2=address2;
    this.city=city;
    this.orderitemslist=[];
    this.sharedService.getOrdersItems(orderid).subscribe(data =>{ 
      console.log(data);
      this.orderitemslist=data;
  
    

   }); 
    this.modalRef = this.modalService.open(this.myModal, {
    size: "lg",
    modalClass: 'mymodal',
    hideCloseButton: false,
    centered: false,
    backdrop: true,
    animation: true,
    keyboard: false,
    closeOnOutsideClick: true,
    backdropClass: "modal-backdrop"
})

  }

  clearlog()
  {
    localStorage.removeItem('id');
    this.router.navigate(['/']);
  }
  Editusers() {
    var value=  JSON.parse(localStorage.getItem('id') || '[]');
    this.sharedService.GetbyIDUsers(value).subscribe(data=>{
    this.usersIDList=data;
   this.firstname1=this.usersIDList.firstname;
   this.lastname1=this.usersIDList.lastname;
   this.email1=this.usersIDList.email;
   this.phone1=this.usersIDList.phone;
   this.password1=this.usersIDList.password;


    });

  }
  saveusers() {
   
    if(this.usersID != null )
    {    this.obj = new User(Number(this.usersID),this.firstname1,this.lastname1,this.phone1,this.email1,this.password1,"");}
    else
  {
     this.obj = new User(0,this.firstname1,this.lastname1,this.phone1,this.email1,this.password1,"");

  }

    this.sharedService.postUsers(this.obj).subscribe(data=>{
    
      if(data == true)
      {    

      }
    else
    {
      // this.alertService.error("Error");
    }
 
    });
  }
}
