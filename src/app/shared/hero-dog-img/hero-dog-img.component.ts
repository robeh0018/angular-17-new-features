import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-dog-img',
  standalone: true,
  imports: [],
  template: `
    <img
      srcset="https://picsum.photos/id/237/200/300"
      alt="Picsum"
      width="200"
      height="300"
      style="view-transition-name: hero1"

    />
  `,
  styles: ``
})
export class HeroDogImgComponent {

}
