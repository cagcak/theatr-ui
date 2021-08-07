import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { FeatureModuleSchema } from './schema';
import * as schematicsAngularUtility from '../../schematics-angular-utils';

export default function(schema: FeatureModuleSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const defaults: FeatureModuleSchema = {
      commonModule: null,
      flat: null,
      lintFix: null,
      module: null,
      name: null,
      path: null,
      project: null,
      routing: null,
      routingScope: null,
      export: null
    };

    return;
  };
}
