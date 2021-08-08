import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CinematicSceneFormConsts } from '../../../consts';

@Component({
  selector: 'theatr-organisms-cinematic-scene',
  templateUrl: './organisms-cinematic-scene.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganismsCinematicSceneComponent implements OnInit {
  @Input()
  someSelector: string;

  cinematicSceneForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildcinematicSceneForm();
  }

  private buildcinematicSceneForm(): void {
    this.cinematicSceneForm = this.fb.group({
      [CinematicSceneFormConsts.EXAMPLE_FORM_CONTROL_NAME]: [null],
    });
  }
}
