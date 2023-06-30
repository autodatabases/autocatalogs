import pino from 'pino';

const logger = pino(
	{
		name: `base-logger`,
		level: `debug`
	},
	pino.destination(`${process.env['apps.autocatalogs.log.path']}`)
);

/**
 *
 * @param {Object} options pino options: {name, ...}
 * @returns
 */
const getLogger = (options = {}) => logger.child(options);

export default getLogger;
