export default class GetTransmissionsUsecase {
	/**
	 * @param {TransmissionRepository} transmissionRepository
	 */
	constructor({ transmissionRepository }) {
		this.transmissionRepository = transmissionRepository;
	}

	/**
	 * @param {{
	 *   query: string,
	 *   count: string|number
	 * }} params
	 * @return {Promise<*>}
	 */
	async process(params) {
		return this.transmissionRepository.getList(params);
	}
}
