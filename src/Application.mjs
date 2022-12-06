import awilix from 'awilix';
import prisma from '../libs/prisma.mjs';
import container from './container.mjs';

const { asValue, asClass } = awilix;

export default class Application {
  constructor() {
    this.container = null;
  }
  /**
   * initialize application
   */
  async createContainer() {
    this.container = awilix.createContainer();

    this.container.register({
      prisma: asValue(prisma),
      avitoCatalogsUrl: asValue(process.env['apps.avitocatalogs.ws'])
    });

    const classes = {};

    for (const [key, value] of container) {
      classes[key] = asClass(value);
    }

    this.container.register(classes);
  }

  /**
   * create scope for http request
   * @param {*} req
   */
  async createScope(req) {
    if (this.container == null) {
      await this.createContainer();
    }

    return this.container.createScope();
  }

  /**
   * resolve bean by name
   * @param {*} name name of bean
   */
  resolve(name) {
    return this.container.resolve(name);
  }

  asArray(resolvers) {
    return {
      resolve: (container, opts) => resolvers.map((r) => container.build(r, opts))
    };
  }
}
