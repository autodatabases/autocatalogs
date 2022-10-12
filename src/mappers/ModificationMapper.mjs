import { BODIES, TRANSMISSIONS, DRIVES } from '../constants.mjs';

export default class ModificationMapper {
	/**
	 *
	 * @param {Array} modificationsFromCatalog
	 * @returns {Object}
	 * modifications - массив отформатированных моделей для сохранения данных,
	 * bodies - массив отформатированных типов кузовов сохранения данных
	 * drives - массив отформатированных типов приводов сохранения данных
	 * modelBody - массив id
	 * modelTransmission - массив id
	 * modelDrive - массив id
	 */
	map(modificationsFromCatalog) {
		const bodies = [];
		const transmissions = [];
		const modelBody = [];
		const modelTransmission = [];
		const drives = [];
		const modelDrive = [];

		const modifications = modificationsFromCatalog.map((item) => {
			const {
				Modification,
				Model,
				Transmission,
				BodyType,
				DriveType,
				YearFrom,
				EngineSize,
				Power
			} = item;

			this.bodyMapper(bodies, BodyType, BODIES);
			this.transmissionMapper(transmissions, Transmission, TRANSMISSIONS);
			this.driveMapper(drives, DriveType, DRIVES);
			this.modelBodyMapper(Model, BodyType, modelBody);
			this.modelTransmissionMapper(Model, Transmission, modelTransmission);
			this.modelDriveMapper(Model, DriveType, modelDrive);

			const res = {
				id: Number(Modification[0].id[0]),
				name: Modification[0]._,
				vehicleModelId: Number(Model[0].id[0]),
				vehicleTransmissionId: Number(Transmission[0].id[0]),
				vehicleBodyId: Number(BodyType[0].id[0]),
				vehicleYear: Number(YearFrom[0]._),
				vehicleEnginePower: Number(Power[0]._),
				vehicleEngineCapacity: Number(EngineSize[0]._)
			};
			res.code = this.codeAdapter(res.vehicleEnginePower, res.vehicleEngineCapacity);
			return res;
		});

		// console.log({ modelBody, modelTransmission, drives, modelDrive });
		return {
			modifications,
			bodies,
			transmissions,
			modelBody,
			modelTransmission,
			drives,
			modelDrive
		};
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

	modelBodyMapper(model, body, vehicleModelBody) {
		if (
			!vehicleModelBody.find(
				({ vehicleModelId, vehicleBodyId }) =>
					vehicleModelId === Number(model[0].id[0]) && vehicleBodyId === Number(body[0].id[0])
			)
		) {
			vehicleModelBody.push({
				vehicleModelId: Number(model[0].id[0]),
				vehicleBodyId: Number(body[0].id[0])
			});
		}
	}

	modelTransmissionMapper(model, transmission, vehicleModelTransmission) {
		if (
			!vehicleModelTransmission.find(
				({ vehicleModelId, vehicleTransmissionId }) =>
					vehicleModelId === Number(model[0].id[0]) &&
					vehicleTransmissionId === Number(transmission[0].id[0])
			)
		) {
			vehicleModelTransmission.push({
				vehicleModelId: Number(model[0].id[0]),
				vehicleTransmissionId: Number(transmission[0].id[0])
			});
		}
	}

	modelDriveMapper(model, drive, vehicleModelDrive) {
		if (
			!vehicleModelDrive.find(
				({ vehicleModelId, vehicleDriveId }) =>
					vehicleModelId === Number(model[0].id[0]) && vehicleDriveId === Number(drive[0].id[0])
			)
		) {
			vehicleModelDrive.push({
				vehicleModelId: Number(model[0].id[0]),
				vehicleDriveId: Number(drive[0].id[0])
			});
		}
	}

	driveMapper(arr, value, types) {
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
