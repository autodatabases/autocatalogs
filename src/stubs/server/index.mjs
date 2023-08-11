import avitoHandlers from './avito.mjs';

export default [
  JSON.parse(process.env['apps.autocatalogs.stub.avitoEnabled']) ? avitoHandlers : [],
].flat();
