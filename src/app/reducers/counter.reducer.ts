import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

// Export an interface for TypeScript
export interface CounterState {
  current: number;
  by: number;
}


export const initialState: CounterState = {
  current: 0,
  by: 1
};

// Reducer function
// (state, action): state
// have to be "pure" functions
// --- they can't change their arguments
// --- can't do things like API calls, etc.
const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (currentState) => ({ ...currentState, current: currentState.current + currentState.by })),
  on(actions.countDecremented, (currentState) => ({ ...currentState, current: currentState.current - currentState.by })),
  on(actions.countBySet, (currentState, action) => ({ ...currentState, by: action.by })),
  on(actions.countReset, () => initialState)
);


export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}





