import { StoreOptions } from '@ngxs/store/src/symbols';
import { CinematicSceneForm } from './cinematic-scene-form';

export namespace CinematicScene {
  export const NAME = 'CinematicSceneState';
  export const DEFAULTS = {
    cinematicSceneForm: {} as CinematicSceneForm,
    contacts: [] as string[],
  } as State;

  export const OPTIONS: StoreOptions<State> = {
    name: NAME,
    defaults: DEFAULTS
  };

  export interface State {
    cinematicSceneForm: CinematicSceneForm;
    contacts: string[];
  }
}
