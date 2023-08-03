import autocatalogsHandlers from './autocatalogs.mjs';
import avitoHandlers from './avito.mjs';

export default [
  JSON.parse(process.env['apps.autocatalogs.stub.avitoEnabled']) ? avitoHandlers : [],
  JSON.parse(process.env['apps.autocatalogs.stub.catalogsEnabled']) ? autocatalogsHandlers : []
].flat();
