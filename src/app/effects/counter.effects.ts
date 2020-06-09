import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';
@Injectable()
export class CounterEffects {

  // logEverything$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(`Got an action of type ${a.type}`))
  //   ), { dispatch: false }
  // );

  loadCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('by')), // -> null | '1' | '3' | '5'
      filter(by => by !== null), // -> (quit) OR '1' | '3' | '5'
      map(by => parseInt(by, 10)), // -> 1 | 3 | 5
      map(by => counterActions.countBySet({ by })) // -> action which goes to the store.
    ), { dispatch: true }
  );

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet), // Action -> countBySet
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );
  constructor(private actions$: Actions) { }

}
