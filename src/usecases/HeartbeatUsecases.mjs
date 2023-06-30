import DatabaseException from '../exceptions/DatabaseException.mjs';

export default class HeartbeatUsecases {
  /**
   * @param {HeartbeatRepository} heartbeatRepository
   */
  constructor({ heartbeatRepository }) {
    this.heartbeatRepository = heartbeatRepository;
  }

  /**
   * @return {Promise<{response: string}>}
   */
  async process() {
    try {
      await this.heartbeatRepository.test();
    } catch (err) {
      console.log(err);
      throw new DatabaseException('Нет доступа к базе данных.');
    }
  }
}
