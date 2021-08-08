import { async, TestBed } from '@angular/core/testing';
import { CinematicSceneComponent } from './cinematic-scene.component';

describe('CinematicSceneComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CinematicSceneComponent]
    }).compileComponents();
  }));

  it('should created component', () => {
    const fixture = TestBed.createComponent(CinematicSceneComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
