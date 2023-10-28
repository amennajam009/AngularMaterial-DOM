import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  @Input() formwholedata: any;

  constructor() {}

  ngOnInit(): void {
  this.formwholedata.subscribe((res:any)=>{
    res
    console.log('%%%%%%%%' , res)
  })
  }
}
