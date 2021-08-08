// Example: Reactive form props
export interface CinematicSceneFormProps {
  exampleFormControlName: string;
}

// Example: In case of ngxs form
export interface CinematicSceneForm {
  [prop: string]: CinematicSceneFormProps;
};
