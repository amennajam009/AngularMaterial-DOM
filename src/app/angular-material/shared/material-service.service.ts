import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialServiceService {

  constructor(private httpClient : HttpClient) { }


  angularMaterialDropDownVaribale(){
    return this.httpClient.get('http://localhost:8080/sendAngularMaterialData/materialDropDownVariable')
  }

  userCreate(data:any){
    return this.httpClient.post('http://localhost:8080/api_material/apiCrudCreate',data)
  }

 getUserData(){
  return this.httpClient.get('http://localhost:8080/api_material/getUserData')
 }
}
