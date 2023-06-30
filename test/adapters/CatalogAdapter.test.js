import CatalogAdapter from '../../src/adapters/CatalogAdapter.mjs';
import { promises as fs } from 'fs';

const XML_FILE_WRITER = 'conf/Autocatalog.xml';
const JSON_RESULT = 'test/adapters/data.json';
let xmlDataMock;
let jsonResultDataMock;

beforeAll(async () => {
  xmlDataMock = await fs.readFile(XML_FILE_WRITER);
  jsonResultDataMock = await fs.readFile(JSON_RESULT, { encoding: 'utf8' });
});

test('get catalog', async () => {
  const adapter = new CatalogAdapter();
  const convertedData = await adapter.convert(xmlDataMock);
  expect(JSON.stringify(convertedData)).toStrictEqual(jsonResultDataMock);
});
