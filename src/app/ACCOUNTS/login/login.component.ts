import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/MODEL/user';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string="";
  password:string="";
  obj:any=User;
  userobj:any=[];
  constructor(private sharedService: SharedService,private router: Router,private formBuilder: FormBuilder)  { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
login()
{
  if(!this.email)
  {        Swal.fire({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    icon: 'error',
   
    timer: 5000,
    title: 'Email Cannot Be Empty.'
  })}
  else if(!this.password)
  {        Swal.fire({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    icon: 'error',
   
    timer: 5000,
    title: 'Password Cannot Be Empty.'
  })}
  else
  {

    this.obj = new User(0,"","","",this.email,this.password,"");
    this.sharedService.getUserLogin(this.obj).subscribe(data=>{
      this.userobj=data;
      if(this.userobj)
      { console.log(this.userobj.firstname);
        localStorage.setItem("id",JSON.stringify(this.userobj.id)) ;
        localStorage.setItem("name",JSON.stringify(this.userobj.firstname)) ;
        this.router.navigate(['/']);
      }
      else
      {
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'error',
         
          timer: 5000,
          title: 'Invalid User or User Not Activated '
        })
    
    }
  
     });
  }


}
}
