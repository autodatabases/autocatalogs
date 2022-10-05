import pino from 'pino';

const onPinoPretty = {
	target: `pino-pretty`,
	options: {
		colorize: true
	}
};

export const logger = pino(
	{
		name: `base-logger`,
		level: `debug`,
		transport: process.env.IS_LOGFILE_APPEAR ? undefined : onPinoPretty
	},
	process.env.IS_LOGFILE_APPEAR ? pino.destination(process.env.LOGFILE_PATH) : process.stdout
);

// Метод всегда возвращает новый логгер, унаследованный от стандартного логгера.
// В метод можно передать специфичные настройки для нового экземпляра класса.
export const getLogger = (options = {}) => logger.child(options);
