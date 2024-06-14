import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DisplayTicketsComponent } from '@components/display-tickets/display-tickets.component';
import { Ticket } from '@lib/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [DisplayTicketsComponent, AsyncPipe],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  tickets$!: Observable<Ticket[]>
  constructor(private store: Store<{ tickets: Ticket[] }>) {
    this.tickets$ = store.select('tickets')
  }
}
