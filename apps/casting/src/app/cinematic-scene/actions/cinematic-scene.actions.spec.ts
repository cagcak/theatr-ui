import { CinematicSceneExampleAction } from './cinematic-scene.actions';

describe('[CinematicSceneExampleAction] Cinematic scene Example Action', () => {
  it('CinematicSceneExampleAction Action', () => {
    expect(CinematicSceneExampleAction.type).toBe('[CinematicSceneExampleAction] Cinematic scene Example Action');
    expect(CinematicSceneExampleAction.desc).toBe('Cinematic scene Example Action');
  });
});
