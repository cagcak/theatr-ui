import { OrganismsCinematicSceneComponent } from './organisms-cinematic-scene.component';
import { async, TestBed } from '@angular/core/testing';

describe('OrganismsCinematicSceneComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganismsCinematicSceneComponent]
    }).compileComponents();
  }));

  it('should created', () => {
    const fixture = TestBed.createComponent(OrganismsCinematicSceneComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
