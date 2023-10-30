import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularMaterialCommunicationService {
 private dataToSend = '';
  
  constructor() { }


  saveVariablesData(data:any){
  return this.dataToSend = data;
  }

  getSavedVariablesData(){
    return this.dataToSend
  }
}
