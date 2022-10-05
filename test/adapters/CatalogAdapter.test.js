import CatalogAdapter from '../../src/adapters/CatalogAdapter.mjs';

import { promises as fs } from 'fs';
import catalogJs from '../data/catalog.js';

const XML_FILE_WRITER = 'test/data/catalog.xml';
let xmlDataMock;

beforeAll(async () => {
	xmlDataMock = await fs.readFile(XML_FILE_WRITER);
});

test('get catalog', async () => {
	const adapter = new CatalogAdapter();
	const convertedData = await adapter.convert(xmlDataMock);
	expect(convertedData).toStrictEqual(catalogJs);
});
