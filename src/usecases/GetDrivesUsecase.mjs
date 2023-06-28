export default class GetDrivesUsecase {
	/**
	 * @param {DriveRepository} driveRepository
	 */
	constructor({ driveRepository }) {
		this.driveRepository = driveRepository;
	}

	/**
	 * @param {{
	 *   query: string,
	 *   count: string|number
	 * }} params
	 * @return {Promise<*>}
	 */
	async process(params) {
		return this.driveRepository.getList(params);
	}
}
