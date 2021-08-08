import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CinematicSceneExampleAction } from '../actions';
import { CinematicScene } from '../models';

@State<CinematicScene.State>(CinematicScene.OPTIONS)
export class CinematicSceneState {
  @Selector()
  static getCinematicSceneForm({ cinematicSceneForm }: CinematicScene.State) {
    return cinematicSceneForm;
  }

  @Action(CinematicSceneExampleAction)
  cinematicSceneExampleAction(
    { patchState }: StateContext<CinematicScene.State>,
    { payload }: CinematicSceneExampleAction
  ) {
    return null;
  }
}
