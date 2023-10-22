import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularBootstrapCommunationService {
  private variabledata = new Subject<any>();
 

  setvariables (data: any) {
    this.variabledata.next(data);
  }

  getvariables(): Observable<any> {
    return this.variabledata.asObservable();
  }
}
