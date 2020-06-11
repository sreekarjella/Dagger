import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-expandable-card',
  templateUrl: './expandable-card.component.html',
  styleUrls: ['./expandable-card.component.scss'],
  animations: [
    trigger('panelState', [
      state('closed', style({ height: '34px', overflow: 'hidden' })),
      state('open', style({ height: '*' })),
      transition('closed <=> open', animate('350ms ease-in-out')),
    ]),
  ],
})
export class ExpandableCardComponent {

  folded = 'closed';

  toggleFold() {
    this.folded = this.folded === 'open' ? 'closed' : 'open';
  }
}
