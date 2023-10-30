import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MaterialServiceService } from '../shared/material-service.service';
import { AngularMaterialCommunicationService } from '../angular-material-communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  FormsData : any = {}
  @Output() emitVariablesOfAngularMaterial= new EventEmitter<any>();

  constructor(private angularMaterialService:MaterialServiceService,
              private angularMaterialCommunication:AngularMaterialCommunicationService ) {}

   ngOnInit(): void {
     this.getMaterialVariable()
   }
 
    getMaterialVariable(){
      this.angularMaterialService.angularMaterialDropDownVaribale().subscribe((response:any)=>{
        this.FormsData = response?.result?.data
        console.log('&&&&&&&' , this.FormsData)
        //here's we can send out data to other component by using @Input @Output decor 
        this.emitVariablesOfAngularMaterial.emit(response?.result?.data)
        
        // This is how we can save our data by using services and we can communicate with other components by using it
        this.angularMaterialCommunication.saveVariablesData(this.FormsData)
           
      })
    }


  
}
