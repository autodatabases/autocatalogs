export default class PrismaService {
	constructor() {
		this.manufacturer;
		this.model;
		this.modification;
		this.body;
		this.transmission;
	}

	setManufacturer(manufacturer) {
		this.manufacturer = {
			tableName: manufacturer.tableName,
			name: manufacturer.name,
			code: manufacturer.code,
			avitocode: manufacturer.avitocode
		};
	}

	setModel(model) {
		this.model = {
			tableName: model.tableName,
			name: model.name,
			code: model.code,
			avitocode: model.avitocode,
			carmanufacturerid: model.carmanufacturerid
		};
	}

	setModification(modification) {
		this.modification = {
			tableName: modification.tableName,
			name: modification.name,
			carmodelid: modification.carmodelid,
			cartransmissionid: modification.cartransmissionid,
			carbodyid: modification.carbodyid,
			caryear: modification.caryear,
			enginecapacity: modification.enginecapacity,
			enginepower: modification.enginepower
		};
	}

	setBody(body) {
		this.body = {
			tableName: body.tableName,
			name: body.name,
			code: body.code,
			avitocode: body.avitocode
		};
	}

	setTransmission(transmission) {
		this.transmission = {
			tableName: transmission.tableName,
			name: transmission.name,
			code: transmission.code,
			avitocode: transmission.avitocode
		};
	}

	setTables(manufacturer, model, modification, body, transmission) {
		this.setManufacturer(manufacturer);
		this.setModel(model);
		this.setModification(modification);
		this.setBody(body);
		this.setTransmission(transmission);
	}

	get transmissionTable() {
		return this.transmission;
	}

	get bodyTable() {
		return this.body;
	}

	get modificationTable() {
		return this.modification;
	}

	get modelTable() {
		return this.model;
	}

	get manufacturerTable() {
		return this.manufacturer;
	}
}
