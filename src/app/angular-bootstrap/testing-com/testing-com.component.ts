import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testing-com',
  templateUrl: './testing-com.component.html',
  styleUrls: ['./testing-com.component.css']
})
export class TestingComComponent {
  @Input() MyVariables:any = [] = []
  constructor() { }

  ngOnInit(): void {

  }
}
