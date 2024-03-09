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

    <section class="flex justify-end">

      <app-hero-dog-img/>

      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: hero2"
      >

      </div>

    </section>
  `,
})
export default class ViewTransitionComponent {

}
