export default class ModificationAdapter {
  mapList(modifications) {
    return modifications.reduce((acc, modification) => {
      const existsModification = acc.find((accModification) => accModification.name === modification.name)

      if (existsModification) {
        existsModification.vehicleYears.push(modification.vehicleYear)
        delete modification.vehicleYear
      }

      if (!existsModification) {
        modification.vehicleYears = [modification.vehicleYear];
        delete modification.vehicleYear
        acc.push(modification);
      }

      return acc;
    }, [])
  }
}