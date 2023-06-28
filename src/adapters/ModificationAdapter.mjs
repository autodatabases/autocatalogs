export default class ModificationAdapter {
	mapList(modifications) {
		return modifications.reduce((acc, modification) => {
			const existsModification = acc.find(
				(accModification) => accModification.name === modification.name
			);

			if (existsModification) {
				existsModification.vehicleYears.push(modification.yearFrom);
				existsModification.vehicleYears.sort();
			}

			if (!existsModification) {
				modification.vehicleYears = [modification.yearFrom];
				acc.push(modification);
			}

			return acc;
		}, []);
	}
}
