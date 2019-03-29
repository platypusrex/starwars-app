import * as React from 'react';
import LinkCharacter from './LinkCharacter';
import LinkFilm from './LinkFilm';
import LinkSpecie from './LinkSpecie';
import LinkStarship from './LinkStarship';
import LinkVehicle from './LinkVehicle';

export class Link extends React.Component<{}, {}> {
	static Character: typeof LinkCharacter = LinkCharacter;
	static Film: typeof LinkFilm = LinkFilm;
	static Specie: typeof LinkSpecie = LinkSpecie;
	static Starship: typeof LinkStarship = LinkStarship;
	static Vehicle: typeof LinkVehicle = LinkVehicle;
}

Link.Character = LinkCharacter;
Link.Film = LinkFilm;
Link.Specie = LinkSpecie;
Link.Starship = LinkStarship;
Link.Vehicle = LinkVehicle;