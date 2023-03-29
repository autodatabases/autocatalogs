import awilix from 'awilix';
import prisma from '../libs/prisma.mjs';
import container from './container.mjs';
import { Agent as BetterHttpsProxyAgent } from 'better-https-proxy-agent';
import {
	configureCert,
	configureProxy,
	UriAccessorFactory,
	UriAgentFactory
} from '@ilb/uriaccessorjs';

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
		const uriAgentMap = new Map();

		const mocksEnabled = process.env['apps.autocatalogs.mocks_enabled'];

		const proxy = process.env['internet.proxy.https_apps'];

    if (proxy) {
			const certConfig = this.configureCert(process.env);
			const httpAgent = new BetterHttpsProxyAgent({}, { ...certConfig, ...configureProxy(proxy) });
			uriAgentMap.set(process.env['apps.autocatalogs.avitocatalogs_url'], httpAgent);
		}

		this.container.register({
			prisma: asValue(prisma),
			currentUser: asValue(process.env.USER),
			uriAccessorFileEnabled: asValue(true),
			uriAccessorFactory: asClass(UriAccessorFactory),
			uriAgentFactory: asClass(UriAgentFactory),
			uriAgentMap: asValue(uriAgentMap),
			avitoCatalogsUrl: asValue(mocksEnabled ? process.env['apps.autocatalogs.avitocatalogs_file']
			 : process.env['apps.autocatalogs.avitocatalogs_url'])
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
   * @param res
   */
	async createScope(req, res) {
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
