import { Ticket } from "@lib/types"
import { createAction, props } from "@ngrx/store"

export const createTicketAction = createAction("[Ticket Component] Add ticket")
export const changeTicketAction = createAction("[Ticket Component] Change ticket", props<{ new_ticket: Ticket }>())
export const removeTicketAction = createAction("[Ticket Component] Remove ticket", props<{ to_remove: Ticket }>())
