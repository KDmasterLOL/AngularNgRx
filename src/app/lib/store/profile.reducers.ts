import { createReducer } from '@ngrx/store';
import { City, Profile } from '@lib/types';


const initialState: Profile[] = [{ id: 1, login: 'admin', name: 'name', last_name: 'last name', birth_date: new Date(), city: City.Moscow }]

export const profilesReducer = createReducer(initialState)
