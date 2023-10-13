import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BootstrapServiceService {

  constructor(private HttpClient:HttpClient) {}

  GetDropDownVariables(){
    return this.HttpClient.get("http://localhost:8080/SendVariableData/SendDropDownVariables")
  }
}
