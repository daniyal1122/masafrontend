import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/MODEL/user';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


    
  usersList:any = [];
  usersdata:any=[];
  users:string="";
  usersID:string="";
  usersIDList:any;
  obj:any=User;

  usersname:string="";
  userForm: any;

  firstname:string="";
  lastname:string="";
  phone:string="";
  email:string="";
  password:string="";
  confirmpassword:string="";

  constructor(private sharedService: SharedService,private router: Router,private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
    this.refreshusersList();
    window.scrollTo(0, 0)
  }
  refreshusersList() {
    this.sharedService.getUsers().subscribe(data =>{
      
   
       this.usersList = data;
      
    });    
  }
  Deleteusers(value:any){
    this.sharedService.deleteUsers(value).subscribe(data=>{
      if(data == true)
      {    
        //  this.alertService.success("Successfull");
      this.refreshusersList();
      }
    else
    {
      // this.alertService.error("Error");
    }
    
    });

  }
  Editusers(value:any) {
    this.sharedService.GetbyIDUsers(value).subscribe(data=>{
     this.usersIDList=data;
   
  this.users=this.usersIDList.name;
  this.usersID=this.usersIDList.users_ID;

    });

  }
  saveusers() {
    if(!this.email)
    {
        Swal.fire({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    icon: 'error',
   
    timer: 5000,
    title: 'Email Cannot Be Empty.'
  })
    }
    else if(!this.password)
    {
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'error',
       
        timer: 5000,
        title: 'Password Cannot Be Empty.'
      })
    }
    else if(!this.firstname)
    {        Swal.fire({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    icon: 'error',
   
    timer: 5000,
    title: 'First Name Cannot Be Empty.'
  })}
    else if(!this.phone)
    {
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'error',
       
        timer: 5000,
        title: 'Password Cannot Be Empty.'
      })

    }
    else
    { if(this.usersID != null )
      {    this.obj = new User(Number(this.usersID),this.firstname,this.lastname,this.phone,this.email,this.password,"");}
      else
    {
       this.obj = new User(0,this.firstname,this.lastname,this.phone,this.email,this.password,"");
  
    }
  
      this.sharedService.postUsers(this.obj).subscribe(data=>{
      
        if(data == true)
        {    
          //  this.alertService.success("Successfull");
        this.refreshusersList();
      this.users="";
      this.usersID="";
      this.firstname="";
      this.lastname="";
      this.phone="";
      this.email="";
      this.password="";
      this.confirmpassword="";

      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'success',
       
        timer: 5000,
        title: 'Please Check Your Email For Verfication.'
      })
    }
      else
      {
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'error',
         
          timer: 5000,
          title: 'Unable To Register.'
        })
  
      }
   
      });
    }


  }
  onChange($event: any) {
    let text = $event.target.options[$event.target.options.selectedIndex].text;
    this.usersname=text;
 }
 

}
