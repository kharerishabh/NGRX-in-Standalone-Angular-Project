import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';


const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1)
);

//Alternative way of creating reducer
// export function counterReducer(state = initialState){
//     return state;
// }
