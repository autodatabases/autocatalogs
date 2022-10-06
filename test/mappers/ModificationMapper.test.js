import ManufacturerMapper from '../../src/mappers/ManufacturerMapper.mjs';
import ModelMapper from '../../src/mappers/ModelMapper.mjs';
import ModificationMapper from '../../src/mappers/ModificationMapper.mjs';
import PrismaService from '../../src/services/PrismaService.mjs';

// import { createScope } from '../../libs/usecases/index.mjs';

test('check ModificationMapper output data', async () => {
	// const scope = await createScope({}, false);
	const prismaService = new PrismaService();
	const manufacturer = {
		tableName: 'carmanufacturer',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode'
	};
	const model = {
		tableName: 'carmodel',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode',
		carmanufacturerid: 'carmanufacturerid'
	};
	const modification = {
		tableName: 'carmodification',
		name: 'name',
		carmodelid: 'carmodelid',
		cartransmissionid: 'cartransmissionid',
		carbodyid: 'carbodyid',
		caryear: 'caryear',
		enginecapacity: 'enginecapacity',
		enginepower: 'enginepower'
	};
	const body = {
		tableName: 'carbody',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode'
	};
	const transmission = {
		tableName: 'cartransmission',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode'
	};
	prismaService.setTables(manufacturer, model, modification, body, transmission);
	// Оставил только одного производителя
	const makes = [
		{
			id: ['329192'],
			name: ['AC'],
			Model: [
				{
					id: ['421756'],
					name: ['378 GT Zagato'],
					Generation: [
						{
							id: ['421775'],
							name: ['I (2012)'],
							Modification: [
								{
									id: ['421891'],
									name: ['6.2 MT (442 л.с.)'],
									YearFrom: [
										{
											_: '2012',
											id: ['331118']
										}
									],
									YearTo: [
										{
											_: '2012',
											id: ['331118'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: '378 GT Zagato',
											id: ['421756']
										}
									],
									Generation: [
										{
											_: 'I (2012)',
											id: ['421775']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '6.2 MT (442 л.с.)',
											id: ['421891']
										}
									],
									Power: [
										{
											_: '442',
											id: ['331754']
										}
									],
									EngineSize: [
										{
											_: '6.2',
											id: ['331795']
										}
									],
									BodyType: [
										{
											_: 'Купе',
											id: ['331233']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['422002'],
													name: ['Базовая']
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					id: ['329595'],
					name: ['Ace'],
					Generation: [
						{
							id: ['332036'],
							name: ['I (1992—2000)'],
							Modification: [
								{
									id: ['360354'],
									name: ['3.0 MT (223 л.с.)'],
									YearFrom: [
										{
											_: '1992',
											id: ['331138']
										}
									],
									YearTo: [
										{
											_: '2000',
											id: ['331130'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Ace',
											id: ['329595']
										}
									],
									Generation: [
										{
											_: 'I (1992—2000)',
											id: ['332036']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '3.0 MT (223 л.с.)',
											id: ['360354']
										}
									],
									Power: [
										{
											_: '223',
											id: ['331351']
										}
									],
									EngineSize: [
										{
											_: '3.0',
											id: ['331806']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391938'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['361944'],
									name: ['3.5 MT (354 л.с.)'],
									YearFrom: [
										{
											_: '1992',
											id: ['331138']
										}
									],
									YearTo: [
										{
											_: '2000',
											id: ['331130'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Ace',
											id: ['329595']
										}
									],
									Generation: [
										{
											_: 'I (1992—2000)',
											id: ['332036']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '3.5 MT (354 л.с.)',
											id: ['361944']
										}
									],
									Power: [
										{
											_: '354',
											id: ['331352']
										}
									],
									EngineSize: [
										{
											_: '3.5',
											id: ['331780']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391939'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['363436'],
									name: ['4.6 MT (326 л.с.)'],
									YearFrom: [
										{
											_: '1992',
											id: ['331138']
										}
									],
									YearTo: [
										{
											_: '2000',
											id: ['331130'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Ace',
											id: ['329595']
										}
									],
									Generation: [
										{
											_: 'I (1992—2000)',
											id: ['332036']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '4.6 MT (326 л.с.)',
											id: ['363436']
										}
									],
									Power: [
										{
											_: '326',
											id: ['331353']
										}
									],
									EngineSize: [
										{
											_: '4.6',
											id: ['331793']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391940'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['363631'],
									name: ['4.9 MT (260 л.с.)'],
									YearFrom: [
										{
											_: '1992',
											id: ['331138']
										}
									],
									YearTo: [
										{
											_: '2000',
											id: ['331130'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Ace',
											id: ['329595']
										}
									],
									Generation: [
										{
											_: 'I (1992—2000)',
											id: ['332036']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '4.9 MT (260 л.с.)',
											id: ['363631']
										}
									],
									Power: [
										{
											_: '260',
											id: ['331354']
										}
									],
									EngineSize: [
										{
											_: '4.9',
											id: ['331794']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391941'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['359296'],
									name: ['2.9 MT (195 л.с.)'],
									YearFrom: [
										{
											_: '1992',
											id: ['331138']
										}
									],
									YearTo: [
										{
											_: '2000',
											id: ['331130'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Ace',
											id: ['329595']
										}
									],
									Generation: [
										{
											_: 'I (1992—2000)',
											id: ['332036']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '2.9 MT (195 л.с.)',
											id: ['359296']
										}
									],
									Power: [
										{
											_: '195',
											id: ['331297']
										}
									],
									EngineSize: [
										{
											_: '2.9',
											id: ['331781']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391936'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['359190'],
									name: ['2.9 AT (195 л.с.)'],
									YearFrom: [
										{
											_: '1992',
											id: ['331138']
										}
									],
									YearTo: [
										{
											_: '2000',
											id: ['331130'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Ace',
											id: ['329595']
										}
									],
									Generation: [
										{
											_: 'I (1992—2000)',
											id: ['332036']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Автомат',
											id: ['331255']
										}
									],
									Modification: [
										{
											_: '2.9 AT (195 л.с.)',
											id: ['359190']
										}
									],
									Power: [
										{
											_: '195',
											id: ['331297']
										}
									],
									EngineSize: [
										{
											_: '2.9',
											id: ['331781']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391937'],
													name: ['Базовая']
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					id: ['329596'],
					name: ['Aceca'],
					Generation: [
						{
							id: ['332037'],
							name: ['I (1998—2000)'],
							Modification: [
								{
									id: ['361943'],
									name: ['3.5 MT (354 л.с.)'],
									YearFrom: [
										{
											_: '1998',
											id: ['331132']
										}
									],
									YearTo: [
										{
											_: '2000',
											id: ['331130'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Aceca',
											id: ['329596']
										}
									],
									Generation: [
										{
											_: 'I (1998—2000)',
											id: ['332037']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '3.5 MT (354 л.с.)',
											id: ['361943']
										}
									],
									Power: [
										{
											_: '354',
											id: ['331352']
										}
									],
									EngineSize: [
										{
											_: '3.5',
											id: ['331780']
										}
									],
									BodyType: [
										{
											_: 'Купе',
											id: ['331233']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391942'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['363435'],
									name: ['4.6 MT (326 л.с.)'],
									YearFrom: [
										{
											_: '1998',
											id: ['331132']
										}
									],
									YearTo: [
										{
											_: '2000',
											id: ['331130'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Aceca',
											id: ['329596']
										}
									],
									Generation: [
										{
											_: 'I (1998—2000)',
											id: ['332037']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '4.6 MT (326 л.с.)',
											id: ['363435']
										}
									],
									Power: [
										{
											_: '326',
											id: ['331353']
										}
									],
									EngineSize: [
										{
											_: '4.6',
											id: ['331793']
										}
									],
									BodyType: [
										{
											_: 'Купе',
											id: ['331233']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391943'],
													name: ['Базовая']
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					id: ['329852'],
					name: ['Cobra'],
					Generation: [
						{
							id: ['332039'],
							name: ['Mk IV (1990—2001)'],
							Modification: [
								{
									id: ['363636'],
									name: ['4.9 MT (340 л.с.)'],
									YearFrom: [
										{
											_: '1990',
											id: ['331140']
										}
									],
									YearTo: [
										{
											_: '2001',
											id: ['331129'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk IV (1990—2001)',
											id: ['332039']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '4.9 MT (340 л.с.)',
											id: ['363636']
										}
									],
									Power: [
										{
											_: '340',
											id: ['331358']
										}
									],
									EngineSize: [
										{
											_: '4.9',
											id: ['331794']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391948'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['363630'],
									name: ['4.9 MT (250 л.с.)'],
									YearFrom: [
										{
											_: '1990',
											id: ['331140']
										}
									],
									YearTo: [
										{
											_: '2001',
											id: ['331129'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk IV (1990—2001)',
											id: ['332039']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '4.9 MT (250 л.с.)',
											id: ['363630']
										}
									],
									Power: [
										{
											_: '250',
											id: ['331357']
										}
									],
									EngineSize: [
										{
											_: '4.9',
											id: ['331794']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391946'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['363634'],
									name: ['4.9 MT (326 л.с.)'],
									YearFrom: [
										{
											_: '1990',
											id: ['331140']
										}
									],
									YearTo: [
										{
											_: '2001',
											id: ['331129'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk IV (1990—2001)',
											id: ['332039']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '4.9 MT (326 л.с.)',
											id: ['363634']
										}
									],
									Power: [
										{
											_: '326',
											id: ['331353']
										}
									],
									EngineSize: [
										{
											_: '4.9',
											id: ['331794']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391947'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['363638'],
									name: ['4.9 MT (370 л.с.)'],
									YearFrom: [
										{
											_: '1990',
											id: ['331140']
										}
									],
									YearTo: [
										{
											_: '2001',
											id: ['331129'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk IV (1990—2001)',
											id: ['332039']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '4.9 MT (370 л.с.)',
											id: ['363638']
										}
									],
									Power: [
										{
											_: '370',
											id: ['331359']
										}
									],
									EngineSize: [
										{
											_: '4.9',
											id: ['331794']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391949'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['363629'],
									name: ['4.9 MT (228 л.с.)'],
									YearFrom: [
										{
											_: '1990',
											id: ['331140']
										}
									],
									YearTo: [
										{
											_: '2001',
											id: ['331129'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk IV (1990—2001)',
											id: ['332039']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '4.9 MT (228 л.с.)',
											id: ['363629']
										}
									],
									Power: [
										{
											_: '228',
											id: ['331356']
										}
									],
									EngineSize: [
										{
											_: '4.9',
											id: ['331794']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391945'],
													name: ['Базовая']
												}
											]
										}
									]
								}
							]
						},
						{
							id: ['332040'],
							name: ['Mk V (1999—2007)'],
							Modification: [
								{
									id: ['363635'],
									name: ['4.9 MT (340 л.с.)'],
									YearFrom: [
										{
											_: '1999',
											id: ['331131']
										}
									],
									YearTo: [
										{
											_: '2007',
											id: ['331123'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk V (1999—2007)',
											id: ['332040']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '4.9 MT (340 л.с.)',
											id: ['363635']
										}
									],
									Power: [
										{
											_: '340',
											id: ['331358']
										}
									],
									EngineSize: [
										{
											_: '4.9',
											id: ['331794']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391950'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['363637'],
									name: ['4.9 MT (370 л.с.)'],
									YearFrom: [
										{
											_: '1999',
											id: ['331131']
										}
									],
									YearTo: [
										{
											_: '2007',
											id: ['331123'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk V (1999—2007)',
											id: ['332040']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '4.9 MT (370 л.с.)',
											id: ['363637']
										}
									],
									Power: [
										{
											_: '370',
											id: ['331359']
										}
									],
									EngineSize: [
										{
											_: '4.9',
											id: ['331794']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391951'],
													name: ['Базовая']
												}
											]
										}
									]
								}
							]
						},
						{
							id: ['332041'],
							name: ['Mk VI (2013—2015)'],
							Modification: [
								{
									id: ['364708'],
									name: ['6.2 MT (437 л.с.)'],
									YearFrom: [
										{
											_: '2013',
											id: ['331117']
										}
									],
									YearTo: [
										{
											_: '2015',
											id: ['331115'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk VI (2013—2015)',
											id: ['332041']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '6.2 MT (437 л.с.)',
											id: ['364708']
										}
									],
									Power: [
										{
											_: '437',
											id: ['331360']
										}
									],
									EngineSize: [
										{
											_: '6.2',
											id: ['331795']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391952'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['364715'],
									name: ['6.2 MT (637 л.с.)'],
									YearFrom: [
										{
											_: '2013',
											id: ['331117']
										}
									],
									YearTo: [
										{
											_: '2015',
											id: ['331115'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk VI (2013—2015)',
											id: ['332041']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '6.2 MT (637 л.с.)',
											id: ['364715']
										}
									],
									Power: [
										{
											_: '637',
											id: ['331361']
										}
									],
									EngineSize: [
										{
											_: '6.2',
											id: ['331795']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391953'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['364944'],
									name: ['7.2 MT (640 л.с.)'],
									YearFrom: [
										{
											_: '2013',
											id: ['331117']
										}
									],
									YearTo: [
										{
											_: '2015',
											id: ['331115'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk VI (2013—2015)',
											id: ['332041']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '7.2 MT (640 л.с.)',
											id: ['364944']
										}
									],
									Power: [
										{
											_: '640',
											id: ['331363']
										}
									],
									EngineSize: [
										{
											_: '7.2',
											id: ['331796']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391955'],
													name: ['Базовая']
												}
											]
										}
									]
								},
								{
									id: ['364718'],
									name: ['6.2 MT (780 л.с.)'],
									YearFrom: [
										{
											_: '2013',
											id: ['331117']
										}
									],
									YearTo: [
										{
											_: '2015',
											id: ['331115'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk VI (2013—2015)',
											id: ['332041']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '6.2 MT (780 л.с.)',
											id: ['364718']
										}
									],
									Power: [
										{
											_: '780',
											id: ['331362']
										}
									],
									EngineSize: [
										{
											_: '6.2',
											id: ['331795']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391954'],
													name: ['Базовая']
												}
											]
										}
									]
								}
							]
						},
						{
							id: ['332038'],
							name: ['Mk III (1965—1967)'],
							Modification: [
								{
									id: ['364922'],
									name: ['7.0 MT (416 л.с.)'],
									YearFrom: [
										{
											_: '1965',
											id: ['331165']
										}
									],
									YearTo: [
										{
											_: '1967',
											id: ['331163'],
											special_id: ['999999']
										}
									],
									Make: [
										{
											_: 'AC',
											id: ['329192']
										}
									],
									Model: [
										{
											_: 'Cobra',
											id: ['329852']
										}
									],
									Generation: [
										{
											_: 'Mk III (1965—1967)',
											id: ['332038']
										}
									],
									FuelType: [
										{
											_: 'Бензин',
											id: ['331247']
										}
									],
									DriveType: [
										{
											_: 'Задний',
											id: ['331252']
										}
									],
									Transmission: [
										{
											_: 'Механика',
											id: ['331254']
										}
									],
									Modification: [
										{
											_: '7.0 MT (416 л.с.)',
											id: ['364922']
										}
									],
									Power: [
										{
											_: '416',
											id: ['331355']
										}
									],
									EngineSize: [
										{
											_: '7.0',
											id: ['446907']
										}
									],
									BodyType: [
										{
											_: 'Кабриолет',
											id: ['331232']
										}
									],
									Doors: [
										{
											_: '2',
											id: ['331242']
										}
									],
									Complectations: [
										{
											Complectation: [
												{
													id: ['391944'],
													name: ['Базовая']
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	];

	const manufacturerMapper = new ManufacturerMapper({ prismaService });
	const modelMapper = new ModelMapper({ prismaService });
	const modificationMapper = new ModificationMapper({ prismaService });

	const { modelsFromCatalog } = manufacturerMapper.map(makes);
	const { modificationsFromCatalog } = modelMapper.map(modelsFromCatalog);
	const { modifications } = modificationMapper.map(modificationsFromCatalog);

	const expected = [
		{
			id: 421891,
			carmodelid: 421756,
			cartransmissionid: 331254,
			carbodyid: 331233,
			caryear: 2012,
			enginecapacity: 6.2,
			enginepower: 442,
			name: '6.2 MT (442 л.с.)',
			code: 'MANUAL__442__6_2'
		},
		{
			id: 360354,
			carmodelid: 329595,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1992,
			enginecapacity: 3,
			enginepower: 223,
			name: '3.0 MT (223 л.с.)',
			code: 'MANUAL__223__3_0'
		},
		{
			id: 361944,
			carmodelid: 329595,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1992,
			enginecapacity: 3.5,
			enginepower: 354,
			name: '3.5 MT (354 л.с.)',
			code: 'MANUAL__354__3_5'
		},
		{
			id: 363436,
			carmodelid: 329595,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1992,
			enginecapacity: 4.6,
			enginepower: 326,
			name: '4.6 MT (326 л.с.)',
			code: 'MANUAL__326__4_6'
		},
		{
			id: 363631,
			carmodelid: 329595,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1992,
			enginecapacity: 4.9,
			enginepower: 260,
			name: '4.9 MT (260 л.с.)',
			code: 'MANUAL__260__4_9'
		},
		{
			id: 359296,
			carmodelid: 329595,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1992,
			enginecapacity: 2.9,
			enginepower: 195,
			name: '2.9 MT (195 л.с.)',
			code: 'MANUAL__195__2_9'
		},
		{
			id: 359190,
			carmodelid: 329595,
			cartransmissionid: 331255,
			carbodyid: 331232,
			caryear: 1992,
			enginecapacity: 2.9,
			enginepower: 195,
			name: '2.9 AT (195 л.с.)',
			code: 'MANUAL__195__2_9'
		},
		{
			id: 361943,
			carmodelid: 329596,
			cartransmissionid: 331254,
			carbodyid: 331233,
			caryear: 1998,
			enginecapacity: 3.5,
			enginepower: 354,
			name: '3.5 MT (354 л.с.)',
			code: 'MANUAL__354__3_5'
		},
		{
			id: 363435,
			carmodelid: 329596,
			cartransmissionid: 331254,
			carbodyid: 331233,
			caryear: 1998,
			enginecapacity: 4.6,
			enginepower: 326,
			name: '4.6 MT (326 л.с.)',
			code: 'MANUAL__326__4_6'
		},
		{
			id: 363636,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1990,
			enginecapacity: 4.9,
			enginepower: 340,
			name: '4.9 MT (340 л.с.)',
			code: 'MANUAL__340__4_9'
		},
		{
			id: 363630,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1990,
			enginecapacity: 4.9,
			enginepower: 250,
			name: '4.9 MT (250 л.с.)',
			code: 'MANUAL__250__4_9'
		},
		{
			id: 363634,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1990,
			enginecapacity: 4.9,
			enginepower: 326,
			name: '4.9 MT (326 л.с.)',
			code: 'MANUAL__326__4_9'
		},
		{
			id: 363638,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1990,
			enginecapacity: 4.9,
			enginepower: 370,
			name: '4.9 MT (370 л.с.)',
			code: 'MANUAL__370__4_9'
		},
		{
			id: 363629,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1990,
			enginecapacity: 4.9,
			enginepower: 228,
			name: '4.9 MT (228 л.с.)',
			code: 'MANUAL__228__4_9'
		},
		{
			id: 363635,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1999,
			enginecapacity: 4.9,
			enginepower: 340,
			name: '4.9 MT (340 л.с.)',
			code: 'MANUAL__340__4_9'
		},
		{
			id: 363637,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1999,
			enginecapacity: 4.9,
			enginepower: 370,
			name: '4.9 MT (370 л.с.)',
			code: 'MANUAL__370__4_9'
		},
		{
			id: 364708,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 2013,
			enginecapacity: 6.2,
			enginepower: 437,
			name: '6.2 MT (437 л.с.)',
			code: 'MANUAL__437__6_2'
		},
		{
			id: 364715,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 2013,
			enginecapacity: 6.2,
			enginepower: 637,
			name: '6.2 MT (637 л.с.)',
			code: 'MANUAL__637__6_2'
		},
		{
			id: 364944,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 2013,
			enginecapacity: 7.2,
			enginepower: 640,
			name: '7.2 MT (640 л.с.)',
			code: 'MANUAL__640__7_2'
		},
		{
			id: 364718,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 2013,
			enginecapacity: 6.2,
			enginepower: 780,
			name: '6.2 MT (780 л.с.)',
			code: 'MANUAL__780__6_2'
		},
		{
			id: 364922,
			carmodelid: 329852,
			cartransmissionid: 331254,
			carbodyid: 331232,
			caryear: 1965,
			enginecapacity: 7,
			enginepower: 416,
			name: '7.0 MT (416 л.с.)',
			code: 'MANUAL__416__7_0'
		}
	];
	expect(expected).toEqual(modifications);
});
