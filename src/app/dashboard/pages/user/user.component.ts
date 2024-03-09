import {Component, computed, inject, Signal} from '@angular/core';
import {TitleComponent} from "@shared/title/title.component";
import {HeroDogImgComponent} from "@shared/hero-dog-img/hero-dog-img.component";
import {ActivatedRoute} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";
import {UsersService} from "@services/users.service";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TitleComponent,
    HeroDogImgComponent
  ],
  template: `
    <app-title [title]="this.titleLabel()"/>

    @if (user()) {
      <section>
        <img
          [srcset]="user()!.avatar"
          [alt]="user()!.first_name"

        >

        <div>
          <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
          <p>{{ user()?.email }}</p>
        </div>
      </section>

    } @else {
      <p>Loading...</p>
    }
  `,
  styles: ``
})
export default class UserComponent {

  private userService = inject(UsersService);
  private route = inject(ActivatedRoute);

  // Observable to signal.
  public user = toSignal(
    this.route.params
      .pipe(
        switchMap(({id}) => this.userService.getUsersById(id)),
      )
  )

  public titleLabel: Signal<string> = computed(() => {

      if (this.user()) {
        return `${this.user()?.first_name} ${this.user()?.last_name}`
      }

      return 'No info yet';
    }
  );

  constructor() {
  }
}
