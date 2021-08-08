import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CinematicSceneState } from '../../states';

@Component({
  selector: 'theatr-cinematic-scene',
  template: `
    <theatr-organisms-cinematic-scene
      [someSelector]="someSelector$ | async"
    ></theatr-organisms-cinematic-scene>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CinematicSceneComponent {
  @Select(CinematicSceneState.getCinematicSceneForm)
  someSelector$: Observable<string>;
}
