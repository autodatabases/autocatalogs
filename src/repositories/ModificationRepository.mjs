export default class ModificationRepository {
	constructor({ prisma, prismaService }) {
		this.prisma = prisma;
		this.prismaService = prismaService;
	}

	async saveMany(modifications) {
		const table = this.prismaService.modificationTable.tableName;

		if (this.prisma) {
			await this.prisma[table].createMany({
				data: modifications,
				skipDuplicates: true
			});
		}
	}
}
