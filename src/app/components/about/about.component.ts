import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
          ]
})
export class AboutComponent {
  loadScripts() {
     const dynamicScripts = [
      '../../../assets/js/main.js'
     ];
     for (let i = 0; i < dynamicScripts.length; i++) {
       const node = document.createElement('script');
       node.src = dynamicScripts[i];
       node.type = 'text/javascript';
       node.async = false;
       node.charset = 'utf-8';
       document.getElementsByTagName('head')[0].appendChild(node);
     }
   }

   constructor(){

     this.loadScripts();

   }

}
