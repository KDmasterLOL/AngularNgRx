import { Profile } from "@lib/types";
import { createAction, props } from "@ngrx/store"

export const loginAction = createAction(
  '[Login Page] User Login',
  props<{ username: string; password: string }>()
)
export const logoutAction = createAction('[Login Page] User Logout')
export const loginSuccessAction = createAction('[Auth] Login Complete', props<{ token: string, profile: Profile }>())
export const loginFailAction = createAction('[Auth] Login Fail', props<{ error: any }>());
