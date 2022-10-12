import CatalogProvider from '../../src/providers/CatalogProvider.mjs';
// import { createScope } from '../../libs/usecases/index.mjs';
import catalogJs from '../data/catalog.js';

test('get catalog', async () => {
	// const scope = await createScope({}, false);
	const url = process.env['apps.avitocatalogs.ws'];
	const provider = new CatalogProvider({ url });

	const catalogData = await provider.getData();
	expect(catalogData).toStrictEqual(catalogJs);
});
