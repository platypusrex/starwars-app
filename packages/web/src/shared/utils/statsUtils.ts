import { Character, Planet, Specie, Starship, Vehicle } from '../types/generated';
import { convertCentimetersToFeetInches, convertKilogramsToPounds } from './conversionUtils';

export type Stat = 'character' | 'specie' | 'planet' | 'starship' | 'vehicle';

export interface StatItem {
	label: string;
	stat: string;
}

export type StatList<U extends string> = {
	[K in U]: (data: any) => StatItem[];
};

export const statList: StatList<Stat> = {
	character: (character: Character) => [
		{ label: 'Birth Year', stat: character.birth_year },
		{ label: 'Gender', stat: character.gender },
		{ label: 'Height', stat: convertCentimetersToFeetInches(character.height) },
		{ label: 'Mass', stat: convertKilogramsToPounds(character.mass) },
		{ label: 'Skin Color', stat: character.skin_color },
		{ label: 'Hair Color', stat: character.hair_color },
		{ label: 'Eye Color', stat: character.eye_color }
	],
	specie: (specie: Specie) => [
		{ label: 'Classification', stat: specie.classification },
		{ label: 'Designation', stat: specie.designation },
		{ label: 'Language', stat: specie.language },
		{ label: 'Avg Height', stat: convertCentimetersToFeetInches(specie.average_height) },
		{ label: 'Avg Lifespan', stat: `${specie.average_lifespan} years` },
		{ label: 'Skin Colors', stat: specie.skin_colors },
		{ label: 'Hair Colors', stat: specie.hair_colors },
		{ label: 'Eye Colors', stat: specie.eye_colors },
	],
	planet: (planet: Planet) => [
		{ label: 'Population', stat: planet.population},
		{ label: 'Climate', stat: planet.climate},
		{ label: 'Terrain', stat: planet.terrain},
		{ label: 'Surface Water', stat: planet.surface_water},
		{ label: 'Diameter', stat: planet.diameter},
		{ label: 'Orbital Period', stat: planet.orbital_period},
		{ label: 'Rotation Period', stat: planet.rotation_period},
	],
	starship: (starship: Starship) => [
		{ label: 'Model', stat: starship.model },
		{ label: 'Starship Class', stat: starship.starship_class },
		{ label: 'Manufacturer', stat: starship.manufacturer },
		{ label: 'Length', stat: starship.length },
		{ label: 'Crew #', stat: starship.crew },
		{ label: 'Passenger #', stat: starship.passengers },
		{ label: 'Hyperdrive Rating', stat: starship.hyperdrive_rating },
	],
	vehicle: (vehicle: Vehicle) => [
		{ label: 'Model', stat: vehicle.model },
		{ label: 'Vehicle Class', stat: vehicle.vehicle_class },
		{ label: 'Manufacturer', stat: vehicle.manufacturer },
		{ label: 'Length', stat: vehicle.length },
		{ label: 'Crew #', stat: vehicle.crew },
		{ label: 'Passenger #', stat: vehicle.passengers },
		{ label: 'Atmosphering Speed', stat: vehicle.max_atmosphering_speed },
	]
};