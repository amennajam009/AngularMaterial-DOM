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
    return this.HttpClient.post("http://localhost:8080/saveVariableData/SaveSelectedVariable" , payLoad)
  }

  //saving the Variable
  saveTestingVariable(payLoad:any){
   return this.HttpClient.post("http://localhost:8080/saveVariableData/SaveTestingComponent",payLoad)
  }

  //testingimageApi
  testingImageApi(payLoad:any){
    return this.HttpClient.post("http://localhost:8080/ImageTestingData/MytestingApi",payLoad)
  }

  //Json.Server API
  createUserData(data:any){
    return this.HttpClient.post("http://localhost:3000/UserData",data)
  }

  // get Json.Server API
  getUserData(){
      return this.HttpClient.get("http://localhost:3000/UserData")
  }
  
  // delete Json Data by Id

  deleteUserData(id:any){
    return this.HttpClient.delete(`http://localhost:3000/UserData/${id}`)
  }
}
