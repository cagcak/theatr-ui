/**
 * Creates a new generic NgModule definition in the given or default project.
 */
export interface FeatureModuleSchema {
  /**
   * When true, the new NgModule imports "CommonModule".
   */
  commonModule?: boolean;
  /**
   * When true, creates the new files at the top level of the current project root.
   */
  flat?: boolean;
  /**
   * When true, applies lint fixes after generating the module.
   */
  lintFix?: boolean;
  /**
   * The declaring NgModule.
   */
  module?: string;
  /**
   * The name of the NgModule.
   */
  name: string;
  /**
   * The path at which to create the NgModule, relative to the workspace root.
   */
  path?: string;
  /**
   * The name of the project.
   */
  project?: string;
  /**
   * When true, creates a routing module.
   */
  routing?: boolean;
  /**
   * The scope for the new routing module.
   */
  routingScope?: RoutingScope;
  /**
   * When true, exports module to root module.
   */
  export: boolean;
}
/**
 * The scope for the new routing module.
 */
export enum RoutingScope {
  Child = 'Child',
  Root = 'Root'
}
