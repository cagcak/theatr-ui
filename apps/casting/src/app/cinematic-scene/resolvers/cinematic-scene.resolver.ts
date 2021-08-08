import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { CinematicSceneExampleAction } from '../actions';
import { mapTo } from 'rxjs/operators';

@Injectable()
export class CinematicSceneResolver implements Resolve<null> {
  constructor(private store: Store) {}

  resolve() {
    return this.store
      .dispatch(new CinematicSceneExampleAction(-11))
      .pipe(mapTo(null));
  }
}
