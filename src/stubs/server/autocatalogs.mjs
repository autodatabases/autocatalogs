import path from 'path';
import { rest } from 'msw';
import { stubResponse } from 'msw-symlinked';

const stubPath = path.resolve(process.env['apps.autocatalogs.stub.root']);

export default [
  rest.get(RegExp('/autocatalogs(.*)/api/bodies'), () => stubResponse(`${stubPath}/bodies`)),
  rest.get(RegExp('/autocatalogs(.*)/api/manufacturers'), () =>
    stubResponse(`${stubPath}/manufacturers`)
  ),
  rest.get(RegExp('/autocatalogs(.*)/api/models'), () => stubResponse(`${stubPath}/models`)),
  rest.get(RegExp('/autocatalogs(.*)/api/modifications'), () =>
    stubResponse(`${stubPath}/modifications`)
  )
];
