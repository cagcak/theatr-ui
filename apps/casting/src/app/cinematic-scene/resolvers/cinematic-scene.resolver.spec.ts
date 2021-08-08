import { TestBed, inject } from '@angular/core/testing';
import { CinematicSceneResolver } from './cinematic-scene.resolver';

describe('CinematicSceneResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinematicSceneResolver]
    });
  });

  it('should created CinematicSceneResolver', inject(
    [CinematicSceneResolver],
    (service: CinematicSceneResolver) => {
      expect(service).toBeTruthy();
    }
  ));
});

