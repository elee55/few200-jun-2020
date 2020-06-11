import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface BooksListState extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

// const initialState = adapter.getInitialState();
const initialState: BooksListState = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      title: 'High Weirdness',
      author: 'Erik Davis',
      format: 'HardCover'
    },
    2: {
      id: '2',
      title: 'Walden',
      author: 'Thoreau',
      format: 'SoftCover'
    }
  }
};

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: BooksListState = initialState, action: Action) {
  return reducerFunction(state, action);
}


