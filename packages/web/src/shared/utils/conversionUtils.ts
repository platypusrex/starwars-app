export function convertKilogramsToPounds (mass: string) {
	if (mass === 'unknown') {
		return mass;
	}

	const massInKilograms = parseInt(mass, 10);

	return `${Math.round(massInKilograms * 2.20462)} lbs`;
}

export function convertCentimetersToFeetInches (centimeters: string) {
	if (centimeters === 'unknown') {
		return centimeters;
	}

	const heightInCentimeters = parseInt(centimeters, 10);
	const actualFeet = ((heightInCentimeters * 0.393700) / 12);
	const feet = Math.floor(actualFeet);
	const inches = Math.round((actualFeet - feet) * 12);
	return `${feet}\u2032 ${inches}\u2033`;
}