import CatalogAdapter from '../adapters/CatalogAdapter.mjs';

export default class CatalogProvider {
  constructor({ avitoCatalogsUrl, uriAccessorFactory }) {
    this.uriAccessorFactory = uriAccessorFactory;
    this.catalogsAdapter = new CatalogAdapter();
    this.url = avitoCatalogsUrl;
  }
  /**
   *  Метод реализует получение данных из внешнего ресурса с преобразованием к нужному формату
   * @returns Object
   */
  async getData() {
    const uriAccessor = this.uriAccessorFactory.getUriAccessor(this.url);
    const data = await uriAccessor.getContent();
    return await this.catalogsAdapter.convert(data);
  }
}
