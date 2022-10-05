export default class PrismaService {
	constructor() {
		this.manufacturer = {};
		this.model = {};
		this.modification = {};
		this.body = {};
		this.transmission = {};
	}

	setManufacturer(manufacturer) {
		return {
			tableName: manufacturer.tableName,
			fields: {
				name: manufacturer.name,
				code: manufacturer.code,
				avitocode: manufacturer.avitocode
			}
		};
	}

	setModel(model) {
		return {
			tableName: model.tableName,
			fields: {
				name: model.name,
				code: model.code,
				avitocode: model.avitocode,
				carmanufacturerid: model.carmanufacturerid
			}
		};
	}

	setModification(modification) {
		return {
			tableName: modification.tableName,
			fields: {
				name: modification.name,
				carmodelid: modification.carmodelid,
				cartransmissionid: modification.cartransmissionid,
				carbodyid: modification.carbodyid,
				caryear: modification.caryear,
				enginecapacity: modification.enginecapacity,
				enginepower: modification.enginepower
			}
		};
	}

	setBody(body) {
		return {
			tableName: body.tableName,
			fields: {
				name: body.name,
				code: body.code,
				avitocode: body.avitocode
			}
		};
	}

	setTransmission(transmission) {
		return {
			tableName: transmission.tableName,
			fields: {
				name: transmission.name,
				code: transmission.code,
				avitocode: transmission.avitocode
			}
		};
	}

	setTables(manufacturer, model, modification, body, transmission) {
		this.manufacturer = this.setManufacturer(manufacturer);
		this.models = this.setModel(model);
		this.modification = this.setModification(modification);
		this.body = this.setBody(body);
		this.transmission = this.setTransmission(transmission);
	}

	get TablesInfo() {
		return {
			manufacturer: this.manufacturer,
			model: this.model,
			modification: this.modification,
			body: this.body,
			transmission: this.transmission
		};
	}
}
