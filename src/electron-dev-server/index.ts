
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { executeDevServerBuilder } from '@angular-devkit/build-angular';
import { json } from '@angular-devkit/core';
import { Observable } from 'rxjs';

export function buildElectronDevServer(options: any, context: BuilderContext): Observable<BuilderOutput> {
  return executeDevServerBuilder(options, context, {
    webpackConfiguration: (config) => {
      return { ...config, target: 'electron-renderer' };
    }
  });
}

export default createBuilder<json.JsonObject>(buildElectronDevServer);