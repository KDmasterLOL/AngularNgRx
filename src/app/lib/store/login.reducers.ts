import { createReducer, on } from '@ngrx/store';
import { loginAction, loginFailAction, loginSuccessAction, logoutAction } from './login.actions';
import { Profile } from '@lib/types';

export interface State {
  token: string | undefined
  error: string | undefined
  isLoading: boolean
  profile: Profile | undefined
}

const initialState: State = {
  token: undefined,
  error: undefined,
  isLoading: false,
  profile: undefined
};

export const loginReducer = createReducer(initialState,
  on(loginAction, state => ({ ...state, isLoading: true })),
  on(logoutAction, state => ({ ...state, token: undefined, error: undefined, profile: undefined })),
  on(loginSuccessAction, (state, { token, profile }) => ({ ...state, token, profile, isLoading: false })),
  on(loginFailAction, (state, { error }) => ({ ...state, error, isLoading: false }))
);
