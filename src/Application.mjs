import awilix from 'awilix';
import prisma from '../libs/prisma.mjs';
import container from './container.mjs';
import { Agent as BetterHttpsProxyAgent } from 'better-https-proxy-agent';
import { configureCert, configureProxy, UriAgentFactory } from '@ilb/uriaccessorjs';

const { asValue, asClass } = awilix;

export default class Application {
	constructor() {
		this.container = null;
	}
	/**
	 * initialize application
	 */

	configureCert(context) {
		const certfile = context['apps.autocatalogs.certfile'];
		const passphrase = context['apps.autocatalogs.cert_PASSWORD'];
		return configureCert(certfile, passphrase);
	}

	async createContainer() {
		this.container = awilix.createContainer();

		const proxy = process.env['internet.proxy.http_url'];

		if (proxy) {
			const certConfig = this.configureCert(process.env);
			const httpAgent = new BetterHttpsProxyAgent(
				certConfig,
				configureProxy(process.env['internet.proxy.http_url'])
			);
			this.container.register({
				uriAgentFactory: asValue(
					new UriAgentFactory({
						uriAgentMap: { [process.env['apps.avitocatalogs.ws']]: httpAgent }
					})
				)
			});
		}

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
