import { KarmaBuilder } from '@angular-devkit/build-angular';
import { Path, virtualFs } from '@angular-devkit/core';
import * as fs from 'fs';
import { ElectronKarmaBuilderSchema } from './schema';

export default class ElectronBuilder extends KarmaBuilder {

  buildWebpackConfig(root: Path, projectRoot: Path, sourceRoot: Path | undefined, host: virtualFs.Host<fs.Stats>, options: ElectronKarmaBuilderSchema): any {
    return { ...super.buildWebpackConfig(root, projectRoot, sourceRoot, host, options), target: 'electron-renderer' };
  }
}
