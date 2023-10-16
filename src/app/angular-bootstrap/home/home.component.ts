import { Component } from '@angular/core';
import { BootstrapServiceService } from '../shared/bootstrap-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  variabledata:any = [] = [];
  constructor(private bootstrapService:BootstrapServiceService) { }

  ngOnInit(): void {
    this.GetDropdownVariables()
  }

  GetDropdownVariables(){
    this.bootstrapService.GetDropDownVariables().subscribe((res:any)=>{
      this.variabledata  = res?.data.data;
      console.log("Mydata" , this.variabledata)
    })
  }
}
