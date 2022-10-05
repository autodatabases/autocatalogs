import xml2js from 'xml2js';

export default class CatalogAdapter {
	/**
	 *
	 * @param {XML} data
	 * @returns Object
	 */
	async convert(data) {
		const parser = new xml2js.Parser({ mergeAttrs: true });
		const parsedData = await parser.parseStringPromise(data);
		return parsedData;
	}
}
