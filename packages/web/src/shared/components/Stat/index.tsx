import * as React from 'react';
import StatItem from './StatItem';
import StatGroup from './StatGroup';
import StatCharacter from './StatCharacter';
import StatSpecie from './StatSpecie';
import StatStarship from './StatStarship';
import StatVehicle from './StatVehicle';
import StatPlanet from './StatPlanet';

export class Stat extends React.Component<{}, {}> {
	static Item: typeof StatItem = StatItem;
	static Group: typeof StatGroup = StatGroup;
	static Character: typeof StatCharacter= StatCharacter;
	static Specie: typeof StatSpecie= StatSpecie;
	static Starship: typeof StatStarship = StatStarship;
	static Vehicle: typeof StatVehicle = StatVehicle;
	static Planet: typeof StatPlanet = StatPlanet;
}

Stat.Item = StatItem;
Stat.Group = StatGroup;
Stat.Character = StatCharacter;
Stat.Specie = StatSpecie;
Stat.Starship = StatStarship;
Stat.Vehicle = StatVehicle;
Stat.Planet = StatPlanet;