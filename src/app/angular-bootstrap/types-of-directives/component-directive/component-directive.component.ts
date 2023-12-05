import { Component } from '@angular/core';

@Component({
  selector: 'app-component-directive',
  // templateUrl: './component-directive.component.html',
  template: `<h1 class="text-center mt-5">Welcome to Component directive</h1>
    <h2 class="text-center">
      You must be wondering i'm using html template file right? bruhh 💀
    </h2>
    <div class="dog_meme">
    <img  src="../assets/pic/meme dog.png"   />
    </div>
    <h2 class="text-center">Go check Component directive.ts file</h2>
    <h3 class="mt-5 text-center">
      Now here if you can see i comment out the templateUrl which actually bind
      the file of .html and manipulating <br />
      my html from here it clears that @component directive gives us template
      selector and style by which <br /> we can manipulate our DOM and @component
      is our decorator which has metadata in which it gives us
      selector,template,style
    </h3>`,
  styles: [`
  .dog_meme{
    display:flex;
    justify-content:center;
    align-items:center
  }`],
})
export class ComponentDirectiveComponent {}
