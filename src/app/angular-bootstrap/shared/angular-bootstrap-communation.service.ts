import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularBootstrapCommunationService {
  private variabledata = '';

  setvariables (data: any) {
    return this.variabledata = data;
  }


  getvariables(){
    return this.variabledata;
  }
}
