import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, of } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const state_ = inject(Store<{ login: { token: string } }>)

  return state_.select('login').pipe(map(v => {
    if (v.token == 'token') return true
    router.navigate(['/login'])
    return false
  }))

};
