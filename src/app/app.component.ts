
import { Component } from '@angular/core';
import { identity } from 'rxjs';
import { Router,Params  } from '@angular/router';
import * as myGlobals from 'src/app/Global/global';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'B2BFrontEnd';
  typeSelected: string;
  check:string="";
  imageurl:string=myGlobals.imageurl;
  constructor(private router:Router,private spinnerService: NgxSpinnerService) { 
   
    window.scrollTo(0, 0)
    this.typeSelected = 'fire';

  }
  ngOnInit() {


//     window.scrollTo(0, 0)
  
  }
}
