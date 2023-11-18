import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularMaterialCommunicationService {
 private dataToSend = '';
 private saveStateData = '';
  
  constructor() { }


  saveVariablesData(data:any){
   return this.dataToSend = data;
  }

  getSavedVariablesData(){
    return this.dataToSend
  }

  saveMyStateData(data:any){
    return this.saveStateData = data;
  }

  getMyStateData(){
    return this.saveStateData
  }
}
