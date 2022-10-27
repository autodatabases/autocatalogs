import ManufacturerRepository from './repositories/ManufacturerRepository.mjs'
// const production = process.env.ILB_SYSID == 'PRODUCTION';
const container = new Map();

container.set('manufacturerRepository', ManufacturerRepository)

export default container;
