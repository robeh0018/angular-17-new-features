import {Component} from '@angular/core';
import {TitleComponent} from "../../../shared/title/title.component";
import {HeroDogImgComponent} from "../../../shared/hero-dog-img/hero-dog-img.component";

@Component({
  standalone: true,
  imports: [
    TitleComponent,
    HeroDogImgComponent
  ],
  template: `
    <app-title title="Views transition"/>

    <section class="flex justify-start">


      <app-hero-dog-img/>

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero2"
      >

      </div>

    </section>
  `,
})
export default class ViewTransition1Component {

}
