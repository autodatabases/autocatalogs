import CatalogProvider from '../../src/providers/CatalogProvider.mjs';
// import { createScope } from '../../libs/usecases/index.mjs';
import catalogJs from '../data/catalog.js';

test('get catalog', async () => {
	// const scope = await createScope({}, false);
	const provider = new CatalogProvider();

	const catalogData = await provider.getData();
	expect(catalogData).toStrictEqual(catalogJs);
});
