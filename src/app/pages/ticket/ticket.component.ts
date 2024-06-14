import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { changeTicketAction, removeTicketAction } from '@lib/store/ticket.actions';
import { Ticket } from '@lib/types';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './ticket.component.html'
})
export class TicketComponent {
  ticket!: Ticket | undefined
  _id!: number
  @Input() public set id(id: number) {
    this._id = id
    this.store.select('tickets').subscribe(v => {
      this.ticket = v.find(i => i.id == id)
      this.ticket_form.controls.title.setValue(this.ticket?.title ?? '')
    })
  }
  ticket_form = this.formBuilder.group({
    title: ['']
  })

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<{ tickets: Ticket[] }>) { }
  update_ticket(ev: Event) {
    ev.preventDefault()
    const new_ticket = { ...this.ticket, title: this.ticket_form.value.title } as Ticket
    this.store.dispatch(changeTicketAction({ new_ticket }))
  }
  back() {
    this.router.navigate(['/tickets'])
  }
  remove_ticket() {
    this.store.dispatch(removeTicketAction({ to_remove: this.ticket! }))
    this.back()
  }
}
