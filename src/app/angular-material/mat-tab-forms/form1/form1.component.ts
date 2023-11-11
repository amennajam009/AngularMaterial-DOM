import { Component, Input } from '@angular/core';
import { AngularMaterialCommunicationService } from '../../angular-material-communication.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  @Input() variablesOfMatTabs: any;
  @Input() amen : any
   variablesToShowInSelector : any = {}
   variablesGettingFromCommunicationService : any = {}
  constructor(private angularMaterialCommunication:AngularMaterialCommunicationService) {}

  ngOnInit(): void {
    this.getVariablesByUsingServices()
   this.getVariablesByUsingInputOutDecor()

   console.log('testingggggg', this.amen)
  }

 getVariablesByUsingInputOutDecor(){
  this.variablesOfMatTabs.subscribe((res:any)=>{
    this.variablesToShowInSelector = res
    console.log('^^^^^^^^^^' , this.variablesToShowInSelector)
    })
 }

 getVariablesByUsingServices(){
  this.variablesGettingFromCommunicationService = this.angularMaterialCommunication.getSavedVariablesData()
  console.log('UUUUUUUUUUUUUU',this.variablesGettingFromCommunicationService)
 }
}
