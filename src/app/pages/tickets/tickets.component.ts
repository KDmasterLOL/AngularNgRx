import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayTicketsComponent } from '@components/display-tickets/display-tickets.component';
import { createTicketAction } from '@lib/store/ticket.actions';
import { Ticket } from '@lib/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [AsyncPipe, DisplayTicketsComponent, NgIf],
  templateUrl: './tickets.component.html',
})
export class TicketsComponent {
  tickets$!: Observable<Ticket[]>
  constructor(private router: Router, private store: Store<{ tickets: Ticket[] }>) {
    this.tickets$ = store.select('tickets')
  }
  create_ticket() {
    this.store.dispatch(createTicketAction())
    this.tickets$.subscribe(
      (tickets) => this.router.navigate(['/ticket', tickets[tickets.length - 1].id])
    )
  }


}
