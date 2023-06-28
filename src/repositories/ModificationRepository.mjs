import Repository from './Repository.mjs';

export default class ModificationRepository extends Repository {
	saveMany(modifications) {
		return this.model.createMany({
			data: modifications,
			skipDuplicates: true
		});
	}

	upsert(data) {
		return data.map((item) => {
			return this.model.upsert({
				where: {
					id: item.id
				},
				update: item,
				create: item
			});
		});
	}

	deleteMany() {
		return this.model.deleteMany();
	}

	getAll() {
		return this.model.findMany();
	}

	/**
	 * @param {number|string} count
	 * @param {string} query
	 * @param {string} modelName
	 * @param {number} modelId
	 * @param withBody
	 * @param withTransmission
	 * @return {*}
	 */
	getList({
		count,
		query,
		modelName,
		bodyName,
		year,
		modelId,
		withBody = false,
		withTransmission = false
	}) {
		return this.model.findMany({
			where: {
				...(query && {
					name: {
						contains: query,
						mode: 'insensitive'
					}
				}),
				...(modelId && {
					modelId: modelId
				}),
				...(modelName && {
					model: {
						name: modelName
					}
				}),
				...(bodyName && {
					body: {
						name: bodyName
					}
				}),
				...(year && {
					yearFrom: {
						lte: Number(year)
					},
					yearTo: {
						gte: Number(year)
					}
				})
			},
			include: {
				transmission: withTransmission,
				body: withBody
			},
			...(count && { take: parseInt(count) })
		});
	}
}
