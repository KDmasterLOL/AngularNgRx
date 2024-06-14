import { createReducer, on } from '@ngrx/store'
import { createTicketAction, changeTicketAction, removeTicketAction } from './ticket.actions'
import { Ticket } from '@lib/types'
const create_default_ticket =
  (): Ticket => ({ id: Math.floor(Math.random() * 100), creation_data: new Date(), title: "Default ticket" })
const initialState: Ticket[] = [create_default_ticket()]

export const ticketReducer = createReducer(
  initialState,
  on(createTicketAction, (state) => [...state, create_default_ticket()]),
  on(changeTicketAction, (state, { new_ticket }) =>
    [...state.filter(tick => tick.id != new_ticket.id), new_ticket]
  ),
  on(removeTicketAction, (state, { to_remove }) => state.filter(tick => tick !== to_remove))
)
