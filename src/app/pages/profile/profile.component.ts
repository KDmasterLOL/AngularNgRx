import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Profile } from '@lib/types';
import { Store } from '@ngrx/store';
import { CityPipe } from 'pipes/city.pipe';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AsyncPipe, DatePipe, CityPipe, NgIf],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  profile$: Observable<Profile>
  constructor(private store: Store<{ login: { profile: Profile } }>) {
    this.profile$ = this.store.select('login').pipe(map(v => v.profile))
  }
}
