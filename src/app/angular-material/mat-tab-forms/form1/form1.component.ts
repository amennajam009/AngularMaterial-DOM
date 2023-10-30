import { Component, Input } from '@angular/core';
import { AngularMaterialCommunicationService } from '../../angular-material-communication.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  @Input() variablesOfMatTabs: any;
   variablesToShowInSelector : any = {}
  constructor(private angularMaterialCommunication : AngularMaterialCommunicationService) {}

  ngOnInit(): void {
  this.variablesOfMatTabs.subscribe((res:any)=>{
  this.variablesToShowInSelector = res
  this.angularMaterialCommunication.saveVariablesData(this.variablesToShowInSelector)
  console.log('^^^^^^^^^^' , this.variablesToShowInSelector)
  })
  }
}
