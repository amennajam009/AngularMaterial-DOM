import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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
