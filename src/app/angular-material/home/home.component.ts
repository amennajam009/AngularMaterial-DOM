import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MaterialServiceService } from '../shared/material-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showSpinner: boolean = false;

  constructor(private angularMaterialService:MaterialServiceService) {}


   ngOnInit(): void {
     this.getMaterialVariable()
   }
 
    getMaterialVariable(){
      this.angularMaterialService.angularMaterialDropDownVaribale().subscribe((res:any)=>{
        res
      })
    }


  
}
