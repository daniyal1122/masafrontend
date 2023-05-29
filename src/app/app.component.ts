
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
<<<<<<< HEAD

  check:string="";
  imageurl:string=myGlobals.imageurl;
  constructor(private router:Router,private spinner: NgxSpinnerService) { 
   
    window.scrollTo(0, 0)
    // this.typeSelected = 'fire';
=======
  typeSelected: string;
  check:string="";
  imageurl:string=myGlobals.imageurl;
  constructor(private router:Router,private spinnerService: NgxSpinnerService) { 
   
    window.scrollTo(0, 0)
    this.typeSelected = 'fire';
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7

  }
  ngOnInit() {

<<<<<<< HEAD
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 4000);
=======

>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
//     window.scrollTo(0, 0)
  
  }
}
