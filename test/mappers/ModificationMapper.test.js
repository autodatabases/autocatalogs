import ManufacturerMapper from '../../src/mappers/ManufacturerMapper.mjs';
import ModelMapper from '../../src/mappers/ModelMapper.mjs';
import ModificationMapper from '../../src/mappers/ModificationMapper.mjs';
import ModificationRepository from '../../src/repositories/ModificationRepository.mjs';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const dataFromAdapter = [
		{
			id: ['329192'],
			name: ['AC'],
			Model: [
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
									YearFrom: [{ _: '1992', id: ['331138'] }],
									YearTo: [{ _: '2000', id: ['331130'], special_id: ['999999'] }],
									Make: [{ _: 'AC', id: ['329192'] }],
									Model: [{ _: 'Ace', id: ['329595'] }],
									Generation: [{ _: 'I (1992—2000)', id: ['332036'] }],
									FuelType: [{ _: 'Бензин', id: ['331247'] }],
									DriveType: [{ _: 'Задний', id: ['331252'] }],
									Transmission: [{ _: 'Механика', id: ['331254'] }],
									Modification: [{ _: '3.0 MT (223 л.с.)', id: ['360354'] }],
									Power: [{ _: '223', id: ['331351'] }],
									EngineSize: [{ _: '3.0', id: ['331806'] }],
									BodyType: [{ _: 'Кабриолет', id: ['331232'] }],
									Doors: [{ _: '2', id: ['331242'] }],
									Complectations: [{ Complectation: [{ id: ['391938'], name: ['Базовая'] }] }]
								},
								{
									id: ['361944'],
									name: ['3.5 MT (354 л.с.)'],
									YearFrom: [{ _: '1992', id: ['331138'] }],
									YearTo: [{ _: '2000', id: ['331130'], special_id: ['999999'] }],
									Make: [{ _: 'AC', id: ['329192'] }],
									Model: [{ _: 'Ace', id: ['329595'] }],
									Generation: [{ _: 'I (1992—2000)', id: ['332036'] }],
									FuelType: [{ _: 'Бензин', id: ['331247'] }],
									DriveType: [{ _: 'Задний', id: ['331252'] }],
									Transmission: [{ _: 'Механика', id: ['331254'] }],
									Modification: [{ _: '3.5 MT (354 л.с.)', id: ['361944'] }],
									Power: [{ _: '354', id: ['331352'] }],
									EngineSize: [{ _: '3.5', id: ['331780'] }],
									BodyType: [{ _: 'Кабриолет', id: ['331232'] }],
									Doors: [{ _: '2', id: ['331242'] }],
									Complectations: [{ Complectation: [{ id: ['391939'], name: ['Базовая'] }] }]
								},
								{
									id: ['359190'],
									name: ['2.9 AT (195 л.с.)'],
									YearFrom: [{ _: '1992', id: ['331138'] }],
									YearTo: [{ _: '2000', id: ['331130'], special_id: ['999999'] }],
									Make: [{ _: 'AC', id: ['329192'] }],
									Model: [{ _: 'Ace', id: ['329595'] }],
									Generation: [{ _: 'I (1992—2000)', id: ['332036'] }],
									FuelType: [{ _: 'Бензин', id: ['331247'] }],
									DriveType: [{ _: 'Задний', id: ['331252'] }],
									Transmission: [{ _: 'Автомат', id: ['331255'] }],
									Modification: [{ _: '2.9 AT (195 л.с.)', id: ['359190'] }],
									Power: [{ _: '195', id: ['331297'] }],
									EngineSize: [{ _: '2.9', id: ['331781'] }],
									BodyType: [{ _: 'Кабриолет', id: ['331232'] }],
									Doors: [{ _: '2', id: ['331242'] }],
									Complectations: [{ Complectation: [{ id: ['391937'], name: ['Базовая'] }] }]
								},
								{
									id: ['363436'],
									name: ['4.6 MT (326 л.с.)'],
									YearFrom: [{ _: '1992', id: ['331138'] }],
									YearTo: [{ _: '2000', id: ['331130'], special_id: ['999999'] }],
									Make: [{ _: 'AC', id: ['329192'] }],
									Model: [{ _: 'Ace', id: ['329595'] }],
									Generation: [{ _: 'I (1992—2000)', id: ['332036'] }],
									FuelType: [{ _: 'Бензин', id: ['331247'] }],
									DriveType: [{ _: 'Задний', id: ['331252'] }],
									Transmission: [{ _: 'Механика', id: ['331254'] }],
									Modification: [{ _: '4.6 MT (326 л.с.)', id: ['363436'] }],
									Power: [{ _: '326', id: ['331353'] }],
									EngineSize: [{ _: '4.6', id: ['331793'] }],
									BodyType: [{ _: 'Кабриолет', id: ['331232'] }],
									Doors: [{ _: '2', id: ['331242'] }],
									Complectations: [{ Complectation: [{ id: ['391940'], name: ['Базовая'] }] }]
								},
								{
									id: ['363631'],
									name: ['4.9 MT (260 л.с.)'],
									YearFrom: [{ _: '1992', id: ['331138'] }],
									YearTo: [{ _: '2000', id: ['331130'], special_id: ['999999'] }],
									Make: [{ _: 'AC', id: ['329192'] }],
									Model: [{ _: 'Ace', id: ['329595'] }],
									Generation: [{ _: 'I (1992—2000)', id: ['332036'] }],
									FuelType: [{ _: 'Бензин', id: ['331247'] }],
									DriveType: [{ _: 'Задний', id: ['331252'] }],
									Transmission: [{ _: 'Механика', id: ['331254'] }],
									Modification: [{ _: '4.9 MT (260 л.с.)', id: ['363631'] }],
									Power: [{ _: '260', id: ['331354'] }],
									EngineSize: [{ _: '4.9', id: ['331794'] }],
									BodyType: [{ _: 'Кабриолет', id: ['331232'] }],
									Doors: [{ _: '2', id: ['331242'] }],
									Complectations: [{ Complectation: [{ id: ['391941'], name: ['Базовая'] }] }]
								},
								{
									id: ['359296'],
									name: ['2.9 MT (195 л.с.)'],
									YearFrom: [{ _: '1992', id: ['331138'] }],
									YearTo: [{ _: '2000', id: ['331130'], special_id: ['999999'] }],
									Make: [{ _: 'AC', id: ['329192'] }],
									Model: [{ _: 'Ace', id: ['329595'] }],
									Generation: [{ _: 'I (1992—2000)', id: ['332036'] }],
									FuelType: [{ _: 'Бензин', id: ['331247'] }],
									DriveType: [{ _: 'Задний', id: ['331252'] }],
									Transmission: [{ _: 'Механика', id: ['331254'] }],
									Modification: [{ _: '2.9 MT (195 л.с.)', id: ['359296'] }],
									Power: [{ _: '195', id: ['331297'] }],
									EngineSize: [{ _: '2.9', id: ['331781'] }],
									BodyType: [{ _: 'Кабриолет', id: ['331232'] }],
									Doors: [{ _: '2', id: ['331242'] }],
									Complectations: [{ Complectation: [{ id: ['391936'], name: ['Базовая'] }] }]
								}
							]
						}
					]
				}
			]
		}
	];
const dataFromRepo = [
        {
          id: 2,
          avitoModificationId: 360354,
          modelId: 329595,
          transmissionId: 331254,
          bodyId: 331232,
          driveId: 331252,
          yearFrom: 1992,
          yearTo: 2000,
          enginePower: 223,
          engineCapacity: 3,
          name: '3.0 MT (223 л.с.)',
          code: 'MANUAL__223__3_0'
        },
        {
          id: 3,
          avitoModificationId: 361944,
          modelId: 329595,
          transmissionId: 331254,
          bodyId: 331232,
          driveId: 331252,
          yearFrom: 1992,
          yearTo: 2000,
          enginePower: 354,
          engineCapacity: 3.5,
          name: '3.5 MT (354 л.с.)',
          code: 'MANUAL__354__3_5'
        },
        {
          id: 4,
          avitoModificationId: 359190,
          modelId: 329595,
          transmissionId: 331255,
          bodyId: 331232,
          driveId: 331252,
          yearFrom: 1992,
          yearTo: 2000,
          enginePower: 195,
          engineCapacity: 2.9,
          name: '2.9 AT (195 л.с.)',
          code: 'AUTOMATIC__195__2_9'
        },
        {
          id: 5,
          avitoModificationId: 363436,
          modelId: 329595,
          transmissionId: 331254,
          bodyId: 331232,
          driveId: 331252,
          yearFrom: 1992,
          yearTo: 2000,
          enginePower: 326,
          engineCapacity: 4.6,
          name: '4.6 MT (326 л.с.)',
          code: 'MANUAL__326__4_6'
        },
        {
          id: 6,
          avitoModificationId: 363631,
          modelId: 329595,
          transmissionId: 331254,
          bodyId: 331232,
          driveId: 331252,
          yearFrom: 1992,
          yearTo: 2000,
          enginePower: 260,
          engineCapacity: 4.9,
          name: '4.9 MT (260 л.с.)',
          code: 'MANUAL__260__4_9'
        },
        {
          id: 7,
          avitoModificationId: 359296,
          modelId: 329595,
          transmissionId: 331254,
          bodyId: 331232,
          driveId: 331252,
          yearFrom: 1992,
          yearTo: 2000,
          enginePower: 195,
          engineCapacity: 2.9,
          name: '2.9 MT (195 л.с.)',
          code: 'MANUAL__195__2_9'
        }
      ];
test('check ModificationMapper output data', async () => {
	// Оставил только одного производителя

	const manufacturerMapper = new ManufacturerMapper();
	const modelMapper = new ModelMapper();
	const modificationMapper = new ModificationMapper();

	const { modelsFromCatalog } = manufacturerMapper.map(dataFromAdapter);
	const { modificationsFromCatalog } = modelMapper.map(modelsFromCatalog);
	const { modifications } = modificationMapper.map(modificationsFromCatalog, dataFromRepo);
  const expected = [
     {
      "avitoModificationId": 360354,
      "name": "3.0 MT (223 л.с.)",
      "modelId": 329595,
      "transmissionId": 331254,
      "bodyId": 331232,
      "driveId": 331252,
      "yearFrom": 1992,
      "yearTo": 2000,
      "enginePower": 223,
      "engineCapacity": "3.0",
      "code": "MANUAL__223__3_0",
      "id": 1
     },
     {
      "avitoModificationId": 361944,
      "name": "3.5 MT (354 л.с.)",
      "modelId": 329595,
      "transmissionId": 331254,
      "bodyId": 331232,
      "driveId": 331252,
      "yearFrom": 1992,
      "yearTo": 2000,
      "enginePower": 354,
      "engineCapacity": "3.5",
      "code": "MANUAL__354__3_5",
      "id": 2
     },
     {
      "avitoModificationId": 359190,
      "name": "2.9 AT (195 л.с.)",
      "modelId": 329595,
      "transmissionId": 331255,
      "bodyId": 331232,
      "driveId": 331252,
      "yearFrom": 1992,
      "yearTo": 2000,
      "enginePower": 195,
      "engineCapacity": "2.9",
      "code": "AUTOMATIC__195__2_9",
      "id": 3
     },
     {
      "avitoModificationId": 363436,
      "name": "4.6 MT (326 л.с.)",
      "modelId": 329595,
      "transmissionId": 331254,
      "bodyId": 331232,
      "driveId": 331252,
      "yearFrom": 1992,
      "yearTo": 2000,
      "enginePower": 326,
      "engineCapacity": "4.6",
      "code": "MANUAL__326__4_6",
      "id": 4
     },
     {
      "avitoModificationId": 363631,
      "name": "4.9 MT (260 л.с.)",
      "modelId": 329595,
      "transmissionId": 331254,
      "bodyId": 331232,
      "driveId": 331252,
      "yearFrom": 1992,
      "yearTo": 2000,
      "enginePower": 260,
      "engineCapacity": "4.9",
      "code": "MANUAL__260__4_9",
      "id": 5
     },
     {
      "avitoModificationId": 359296,
      "name": "2.9 MT (195 л.с.)",
      "modelId": 329595,
      "transmissionId": 331254,
      "bodyId": 331232,
      "driveId": 331252,
      "yearFrom": 1992,
      "yearTo": 2000,
      "enginePower": 195,
      "engineCapacity": "2.9",
      "code": "MANUAL__195__2_9",
      "id": 6
     }
    ];
	expect(expected).toEqual(modifications);
});
