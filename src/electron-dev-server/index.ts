import { DevServerBuilder as DevServerBuilderBase, NormalizedBrowserBuilderSchema } from '@angular-devkit/build-angular';
import { Path, virtualFs } from '@angular-devkit/core';
import * as fs from 'fs';

export default class DevServerBuilder extends DevServerBuilderBase {

  buildWebpackConfig(root: Path, projectRoot: Path, host: virtualFs.Host<fs.Stats>, browserOptions: NormalizedBrowserBuilderSchema): any {
    return { ...super.buildWebpackConfig(root, projectRoot, host, browserOptions), target: 'electron-renderer' };
  }
}