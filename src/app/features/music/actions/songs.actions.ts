import { createAction, props } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';


let id = 0;

export const setSongSortOrder = createAction(
  '[music songs] song sort order set',
  props<{ by: string }>()
);

export const addSong = createAction(
  '[music songs] add song',
  ({ title, artist, album }: { title: string, artist: string, album: string }) => ({
    payload: {
      id: 'T' + id++,
      title,
      artist,
      album
    } as SongEntity
  })
);
