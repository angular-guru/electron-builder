
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { executeKarmaBuilder } from '@angular-devkit/build-angular';
import { json } from '@angular-devkit/core';
import { Observable } from 'rxjs';

export function buildElectronKarma(options: any, context: BuilderContext): Observable<BuilderOutput> {
  return executeKarmaBuilder(options, context, {
    webpackConfiguration: (config) => {
      return { ...config, target: 'electron-renderer' };
    }
  });
}

export default createBuilder<json.JsonObject>(buildElectronKarma);