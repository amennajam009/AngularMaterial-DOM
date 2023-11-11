import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  @Input() secondComponent : any
  @Input() MyTestingData: any = ""

  constructor() {}

  ngOnInit(): void {
  //  console.log(this.secondComponent)
   console.log('form222222Data',this.MyTestingData)
  }

}
