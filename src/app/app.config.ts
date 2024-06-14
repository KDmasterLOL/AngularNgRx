import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ActionReducer, ActionReducerMap, MetaReducer, provideStore } from '@ngrx/store'
import { ticketReducer } from '@lib/store/ticket.reducer'

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { loginEffect } from '@lib/store/login.effects';
import { loginReducer } from '@lib/store/login.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';
import { profilesReducer } from '@lib/store/profile.reducers';

const reducers = { tickets: ticketReducer, login: loginReducer, profiles: profilesReducer }

function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  if (typeof window !== "undefined") return localStorageSync({ keys: ['tickets', 'login'], rehydrate: true })(reducer);
  return reducer
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideStore(reducers, { metaReducers }),
    provideEffects({ login: loginEffect })
  ]
};
