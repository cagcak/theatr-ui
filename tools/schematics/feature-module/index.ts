import {
  apply,
  applyTemplates,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  Tree,
  url
} from '@angular-devkit/schematics';
import { FeatureModuleSchema } from './schema';
import { strings } from '@angular-devkit/core';
import * as schematicsAngularUtility from '../../schematics-angular-utils';
import * as schematicsCustomUtility from '../../utils';

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

    const { titlize } = schematicsCustomUtility;
    const {
      getWorkspace,
      findModuleFromOptions,
      parseName
    } = schematicsAngularUtility;

    const workspace = getWorkspace(host);

    if (!schema.project) {
      schema.project = Object.keys(workspace.projects)[0];
    }

    const project = workspace.projects[schema.project];

    if (schema.path === undefined) {
      const projectDirName =
        project.projectType === 'application' ? 'app' : 'lib';

      schema.path = `/${project.root}/src/${projectDirName}`;
    }

    schema.module = findModuleFromOptions(host, schema);

    const { name, path } = parseName(schema.path, schema.name);

    schema.name = name;
    schema.path = path;

    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...strings,
        ...schema,
        titlize
      }),
      move(path)
    ]);

    const rule = chain([branchAndMerge(chain([mergeWith(templateSource)]))]);

    return rule(host, context);
  };
}
