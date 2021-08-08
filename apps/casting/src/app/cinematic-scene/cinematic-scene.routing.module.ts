import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinematicSceneComponent } from './components';
import { CinematicSceneResolver } from './resolvers';

export const routes: Routes = [
  {
    path: '',
    component: CinematicSceneComponent,
    resolve: [CinematicSceneResolver],
    data: { shortCode: 'cinematic-scene' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CinematicSceneResolver],
})
export class CinematicSceneRoutingModule {}
