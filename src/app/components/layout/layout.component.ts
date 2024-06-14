import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { logoutAction } from '@lib/store/login.actions';
import { Profile } from '@lib/types';
import { Store } from '@ngrx/store';
import { BreadcrumbComponent } from 'breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, NgIf, BreadcrumbComponent],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  is_login: boolean = false
  constructor(private router: Router, private store: Store<{ login: { profile: Profile } }>) {
    store.select('login').subscribe(v => this.is_login = v.profile !== undefined)
  }
  logout() {
    this.store.dispatch(logoutAction())
    this.router.navigate(['/login'])
  }
}
