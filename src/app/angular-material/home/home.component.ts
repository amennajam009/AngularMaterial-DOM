import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MaterialServiceService } from '../shared/material-service.service';
import { AngularMaterialCommunicationService } from '../angular-material-communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  FormsData: any = {};
  @Output() emitVariablesOfAngularMaterial = new EventEmitter<any>();
  sendindata: any = {};
  dataToSend : string = "Hello World"

  constructor(
    private angularMaterialService: MaterialServiceService,
    private angularMaterialCommunication: AngularMaterialCommunicationService
  ) {}

  ngOnInit(): void {
    this.getMaterialVariable();
  }

  getMaterialVariable() {
    this.angularMaterialService
      .angularMaterialDropDownVaribale()
      .subscribe((response: any) => {
        this.FormsData = response?.result?.data;
        //here's we can send out data to other component by using @Input @Output decor
        this.emitVariablesOfAngularMaterial.emit(response?.result?.data);
        this.sendindata = response?.result?.data;
        console.log('ddddddddddddddd',this.sendindata)
        // This is how we can save our data by using services and we can communicate with other components by using it
        this.angularMaterialCommunication.saveVariablesData(this.FormsData);
      });
  }

  // sendHelloWorldToComponent(){
  //   this.dataToSend = "Hello World"
  // }
}
