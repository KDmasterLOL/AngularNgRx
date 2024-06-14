import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Ticket } from '@lib/types';

@Component({
  selector: 'app-display-tickets',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './display-tickets.component.html',
})
export class DisplayTicketsComponent {
  @Input() tickets!: Ticket[]
}
