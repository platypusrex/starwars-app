import * as React from 'react';
import { CardProps as AntCardProps } from 'antd/lib/card';
import CardStyled from './CardStyled';
import CardMeta from './CardMeta';
import CardCharacter from './CardCharacter';
import CardSpecie from './CardSpecie';
import CardStarship from './CardStarship';
import CardVehicle from './CardVehicle';
import CardFilm from './CardFilm';
import CardPlanet from './CardPlanet';

export class Card extends React.Component<AntCardProps, {}> {
	static Meta: typeof CardMeta = CardMeta;
	static Character: typeof CardCharacter = CardCharacter;
	static Specie: typeof CardSpecie = CardSpecie;
	static Starship: typeof CardStarship = CardStarship;
	static Vehicle: typeof CardVehicle = CardVehicle;
	static Film: typeof CardFilm = CardFilm;
	static Planet: typeof CardPlanet = CardPlanet;

	render () {
		return <CardStyled {...this.props}/>
	}
}

Card.Meta = CardMeta;
Card.Character = CardCharacter;
Card.Specie = CardSpecie;
Card.Starship = CardStarship;
Card.Vehicle = CardVehicle;
Card.Film = CardFilm;
Card.Planet = CardPlanet;