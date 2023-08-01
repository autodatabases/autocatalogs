import autocatalogsHandlers from './autocatalogs.mjs';

export default [
  JSON.parse(process.env['apps.autocatalogs.stub.autocatalogs.enabled']) ? autocatalogsHandlers : []
].flat();
