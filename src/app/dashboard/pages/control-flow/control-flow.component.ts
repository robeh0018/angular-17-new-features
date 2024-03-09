import {Component, signal} from '@angular/core';
import {TitleComponent} from "../../../shared/title/title.component";

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A').asReadonly();

  public frameworks = signal<string[]>(['Angular', 'React', 'Svelte', 'Next']).asReadonly();
  public frameworks2 = signal<string[]>([]).asReadonly();

  public toggleContent() {
    this.showContent.update(currentValue => !currentValue);
  }


}
