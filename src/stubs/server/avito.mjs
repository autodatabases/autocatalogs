import path from 'path';
import { rest } from 'msw';
import { stubResponse } from 'msw-symlinked';
import fs from 'fs';

const stubPath = path.resolve(process.env['apps.autocatalogs.stub.root']);
const symlinkedPath = fs.realpathSync(`${stubPath}/autocatalogs`);
const pathElements = symlinkedPath.split('.');

let status = 200,
  variant;
[status, variant] = symlinkedPath.split('.').slice(-2);
console.log({ status, variant });
export default [
  rest.get(RegExp('https://autoload.avito.ru/format/Autocatalog.xml'), () =>
    stubResponse(`${stubPath}/autocatalogs`)
  )
];
