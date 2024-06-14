import { Routes } from '@angular/router';
import { loginGuard } from '@guards/login.guard';
import { LoginComponent } from 'pages/login/login.component';
import { ProfileComponent } from 'pages/profile/profile.component';
import { TicketComponent } from 'pages/ticket/ticket.component';
import { TicketsComponent } from 'pages/tickets/tickets.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'tickets', component: TicketsComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'ticket/:id', component: TicketComponent },
    ],
    canActivate: [loginGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' },

];
