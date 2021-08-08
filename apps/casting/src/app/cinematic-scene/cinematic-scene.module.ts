import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { OrganismsCinematicSceneComponent, CinematicSceneComponent } from './components';
import { CinematicSceneState } from './states';
import { CinematicSceneRoutingModule } from './cinematic-scene.routing.module';

@NgModule({
  declarations: [
    CinematicSceneComponent,
    OrganismsCinematicSceneComponent
  ],
  imports: [
    CommonModule,
    CinematicSceneRoutingModule, 
    NgxsModule.forFeature([CinematicSceneState])
  ]
})
export class CinematicSceneModule {}
