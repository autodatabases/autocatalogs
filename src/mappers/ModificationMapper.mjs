import { BODIES, TRANSMISSIONS } from '../constants.mjs';

export default class ModificationMapper {
	/**
	 *
	 * @param {Array} modificationsFromCatalog
	 * @returns {Object}
	 * modifications - массив отформатированных моделей для сохранения данных,
	 * bodies - массив отформатированных типов кузовов сохранения данных
	 * transmissions - массив отформатированных типов трансмиссий сохранения данных
	 */
	map(modificationsFromCatalog) {
		const bodies = [];
		const transmissions = [];
		// const engines = [];

		const modifications = modificationsFromCatalog.map((item) => {
			const { Modification, Model, Transmission, BodyType, YearFrom, EngineSize, Power } = item;

			this.bodyMapper(bodies, BodyType, BODIES);
			this.transmissionMapper(transmissions, Transmission, TRANSMISSIONS);
			// this.paramMapper(engines, EngineSize);

			const res = {
				id: Number(Modification[0].id[0]),
				name: Modification[0]._,
				vehicleModelId: Number(Model[0].id[0]),
				vehicleTransmissionId: Number(Transmission[0].id[0]),
				vehicleBodyId: Number(BodyType[0].id[0]),
				vehicleYear: Number(YearFrom[0]._),
				engineVolume: Number(EngineSize[0]._),
				vehiclePower: Number(Power[0]._)
			};
			res.code = this.codeAdapter(res.vehiclePower, res.engineVolume);

			return res;
		});
		// console.log({ transmissions, bodies });
		return { modifications, bodies, transmissions };
	}

	/**
	 * Метод формирует и возвращает параметр для оценки code
	 * @param {Number} vehiclePower мощность двигателя
	 * @param {Number} engineVolume обьем в литрах
	 * @return {String} MANUAL__vehiclePower__engineVolume
	 */
	codeAdapter(vehiclePower, engineVolume) {
		const format = (value) => {
			const more = value.replaceAll('.', '_');
			const less = value + '_0';
			return value.includes('.') ? more : less;
		};
		return `MANUAL__${vehiclePower}__${format(engineVolume.toString())}`;
	}

	/**
	 *  Метод формирует массив с выбранными параметрами убирая повторяющиеся элементы
	 *  реализован для единоразового обхода по массиву параметров модификации
	 * @param {Array} arr массив для сохранения выделенных параметров
	 * @param {Object} value выбранный параметр из обьекта с параметрами модификации
	 * @param {Array} types массив с параметрами модификаций зашитых в платформе
	 *
	 */
	bodyMapper(arr, value, types) {
		const typeCode = types.find(({ name }) => name === value[0]._.toLowerCase());
		const formatValue = {
			id: Number(value[0].id[0]),
			name: value[0]._.toLowerCase(),
			code: typeCode.code,
			avitoCode: typeCode.code
		};
		if (!arr.map(({ id }) => id).includes(formatValue.id)) {
			arr.push(formatValue);
		}
	}

	/**
	 *  Метод формирует массив с выбранными параметрами убирая повторяющиеся элементы
	 *  реализован для единоразового обхода по массиву параметров модификации
	 * @param {Array} arr массив для сохранения выделенных параметров
	 * @param {Object} value выбранный параметр из обьекта с параметрами модификации
	 * @param {Array} types массив с параметрами модификаций зашитых в платформе
	 *
	 */
	transmissionMapper(arr, value, types) {
		const typeCode = types.find(({ name }) => name === value[0]._.toLowerCase());
		const formatValue = {
			id: Number(value[0].id[0]),
			name: value[0]._.toLowerCase(),
			code: typeCode.code,
			avitoCode: typeCode.code
		};
		if (!arr.map(({ id }) => id).includes(formatValue.id)) {
			arr.push(formatValue);
		}
	}
}
