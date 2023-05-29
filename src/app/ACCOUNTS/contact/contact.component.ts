import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/MODEL/contact';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
    
  contactList:any = [];
  contactdata:any=[];
  contact:string="";
  contactID:string="";
  contactIDList:any;
  obj:any=Contact;

  contactname:string="";
  contactForm: any;

  firstname:string="";
  lastname:string="";
  phone:string="";
  email:string="";
  subject:string="";
  desc:string="";

  constructor(private sharedService: SharedService,private router: Router,private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
    this.refreshcontactList();
    window.scrollTo(0, 0)
  }
  refreshcontactList() {
    this.sharedService.getContacts().subscribe(data =>{
      
   
       this.contactList = data;
      
    });     
  }
  Deletecontact(value:any){
    this.sharedService.deleteContacts(value).subscribe(data=>{
      if(data == true)
      {    
        //  this.alertService.success("Successfull");
      this.refreshcontactList();
      }
    else
    {
      // this.alertService.error("Error");
    }
    
    });

  }
  Editcontact(value:any) {
    this.sharedService.GetbyIDContacts(value).subscribe(data=>{
     this.contactIDList=data;
   
  this.contact=this.contactIDList.name;
  this.contactID=this.contactIDList.contact_ID;

    });

  }
  savecontact() {
    if(this.contactID != null )
    {    this.obj = new Contact(Number(this.contactID),this.firstname,this.lastname,this.phone,this.email,this.subject,this.desc);}
    else
  {
     this.obj = new Contact(0,this.firstname,this.lastname,this.phone,this.email,this.subject,this.desc);

  }

  if(!this.firstname  )
  {
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      icon: 'error',
     
      timer: 5000,
      title: 'Name Cannot Be Empty.' 
    })

  }
  else if (!this.phone)
  {
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      icon: 'error',
     
      timer: 5000,
      title: 'Phone Cannot Be Empty.' 
    })
  }
  else
  {
    this.sharedService.postContacts(this.obj).subscribe(data=>{
    
      if(data == true)
      {    
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
         
          timer: 5000,
          title: 'Saved.' 
        })
      this.firstname="";
      this.lastname="";
      this.phone="";
      this.email="";
      this.subject="";
      this.desc="";

    this.contact="";
    this.contactID="";}
    else
    {
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'error',
       
        timer: 5000,
        title: 'Error! Unable To Save Info.' 
      })
    }
 
    });

  }
 


  }
  onChange($event: any) {
    let text = $event.target.options[$event.target.options.selectedIndex].text;
    this.contactname=text;
 

  }
 
}
