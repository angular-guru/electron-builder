import { BrowserBuilder } from '@angular-devkit/build-angular';
import { Path, virtualFs } from '@angular-devkit/core';
import * as fs from 'fs';
import { Configuration } from 'webpack';
import { ElectronBuilderSchema } from './schema';

export default class ElectronBuilder extends BrowserBuilder {

  buildWebpackConfig(root: Path, projectRoot: Path, host: virtualFs.Host<fs.Stats>, options: ElectronBuilderSchema): Configuration {
    return { ...super.buildWebpackConfig(root, projectRoot, host, options), target: 'electron-renderer' };
  }
}
