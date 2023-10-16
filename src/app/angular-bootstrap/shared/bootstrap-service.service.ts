import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BootstrapServiceService {

  constructor(private HttpClient:HttpClient) {}


//Getting the Variables
  GetDropDownVariables(){
    return this.HttpClient.get("http://localhost:8080/SendVariableData/SendDropDownVariables")
  }


// Saving the Variable
  saveVariables(payLoad:any){
    return this.HttpClient.post("http://localhost:8080/SendVariableData/SendDropDownVariables" , payLoad)
  }
}
