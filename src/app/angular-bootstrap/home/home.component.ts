
import { Component, EventEmitter, Output } from '@angular/core';
import { BootstrapServiceService } from '../shared/bootstrap-service.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularBootstrapComponent } from '../angular-bootstrap.component';
import { AngularBootstrapCommunationService } from '../shared/angular-bootstrap-communation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  variabledata:any = [] = [];
  dropDownVariables : FormBuilder | any;
  @Output() sendObjectToTestingComp = new EventEmitter<any>();

  constructor(private bootstrapService:BootstrapServiceService,
              private FormBuilder:FormBuilder,
              private bootStrapService:BootstrapServiceService,
              private AngularBootstrapCommunationService:AngularBootstrapCommunationService) { 
                this.dropDownVariableModal()
              }

  ngOnInit(): void {
    this.GetDropdownVariables()
  }


  dropDownVariableModal(){
    this.dropDownVariables = this.FormBuilder.group({
      variable1: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable2: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable3: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable4: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable5: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable6: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable7: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable8: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable9: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    })
  }
 
  
SubmitOrder(){
  const payLoad = this.dropDownVariables.value;
  this.bootStrapService.saveVariables(payLoad).subscribe((res:any)=>{
    res
  })
}


  GetDropdownVariables(){
    this.bootstrapService.GetDropDownVariables().subscribe((res:any)=>{
      this.variabledata  = res?.data.data;
      this.AngularBootstrapCommunationService.setvariables(
        res?.data.data
      );
    })
  }
}
