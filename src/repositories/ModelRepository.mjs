export default class ModelRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения моделей авто из каталога
	 * @param {Array} models модели авто полученные из каталога
	 */
	saveMany(models) {
		return this.prisma.vehicleModel.createMany({
			data: models,
			skipDuplicates: true
		});
	}

	deleteMany() {
		return this.prisma.vehicleModel.deleteMany({});
	}

	getModels({query, model, manufacturerId, manufacturerNameId, count}){
		return this.prisma.vehicleModel.findMany({
			where: {
				OR: [
					{
						OR: [
							{
								name: {
									contains: query,
									mode: 'insensitive'
								},
							},
							{
								name: {
									equals: model,
									mode: 'insensitive'
								},
							}
						],
					},
					{
						OR: [
							{
								vehicleManufacturerId: manufacturerId
							},
							{
								vehicleManufacturerId: {in: manufacturerNameId}
							}
						]
					}
				]
			},
			take: count,
			select: {
				id: true,
				name: true,
				code: true,
				avitoCode: true,
				vehicleManufacturerId: true
			}
		})
	}
}
