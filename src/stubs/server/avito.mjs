import path from 'path';
import { rest } from 'msw';
import { stubResponse } from 'msw-symlinked';

const stubPath = path.resolve(process.env['apps.autocatalogs.stub.root']);
const avito_url = process.env['apps.autocatalogs.avitocatalogs_url'];

export default [rest.get(RegExp(avito_url), () => stubResponse(`${stubPath}/autocatalogs`))];
