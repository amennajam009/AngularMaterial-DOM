import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularBootstrapCommunationService {
  private variabledata = '';
  anyDataToPass = []

  setvariables (data: any) {
    return this.variabledata = data;
  }


  getvariables(){
    return this.variabledata;
  }

  dataToSend(data:any){
    return this.anyDataToPass = data
  }
}
