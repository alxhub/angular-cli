import * as path from 'path';
const OfflinePlugin = require('offline-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
import {AngularServiceWorkerPlugin} from '@angular/service-worker/build';
import { PrerenderWebpackPlugin } from '../utilities/prerender-webpack-plugin';

const workerScript = require.resolve('@angular/service-worker/bundles/worker-basic.min');

export const getWebpackSWConfigPartial = function (projectRoot: string, appConfig: any) {
  const appRoot = path.resolve(projectRoot, appConfig.root);
  console.log('app root', appRoot);
  return {
    plugins: [
      new CopyWebpackPlugin([
        {from: workerScript},
        {context: appRoot, from: 'ngsw-manifest.json'}
      ]),
      new AngularServiceWorkerPlugin('ngsw-manifest.json', 'static');
    ],
  };
};

export const getWebpackSWProdConfigPartial = function (projectRoot: string, appConfig: any) {
  const appRoot = path.resolve(projectRoot, appConfig.root);
  return {
    plugins: [
      new CopyWebpackPlugin([
        {from: workerScript},
        {context: appRoot, from: 'ngsw-manifest.json'}
      ]),
      new AngularServiceWorkerPlugin('ngsw-manifest.json', 'static');
    ]
  };
};
