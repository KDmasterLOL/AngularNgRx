import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from '@services/login.service';
import { loginAction, loginFailAction, loginSuccessAction } from './login.actions';



export const loginEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(LoginService)) => {
    return actions$.pipe(
      ofType('[Login Page] User Login'),
      switchMap(({ username, password }) => {
        console.log('Effect')
        return authService.login(username, password).pipe(
          map(({ token, profile }) => loginSuccessAction({ token, profile })),
          catchError(error => {
            return of(loginFailAction({ error }))
          })
        )
      }
      )
    );
  },
  { functional: true }
)

