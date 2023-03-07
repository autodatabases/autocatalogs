import Repository from './Repository.mjs';

export default class HeartbeatRepository extends Repository {
  async test() {
    return this.prisma.$queryRaw`select * from pg_am limit 0;`;
  }
}
