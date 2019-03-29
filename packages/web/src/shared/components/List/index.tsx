import * as React from 'react';
import ListCard from './ListCard';
import ListGroup from './ListGroup';
import ListItem from './ListItem';
import ListItemFilm from './ListItemFilm';
import ListItemCharacter from './ListItemCharacter';
import ListItemSpecie from './ListItemSpecie';
import ListItemPlanet from './ListItemPlanet';
import ListItemStarship from './ListItemStarship';
import ListItemVehicle from './ListItemVehicle';

export class List extends React.Component<{}, {}> {
	static Card: typeof ListCard = ListCard;
	static Group: typeof ListGroup = ListGroup;
	static Item: typeof ListItem = ListItem;
	static ItemFilm: typeof ListItemFilm = ListItemFilm;
	static ItemCharacter: typeof ListItemCharacter = ListItemCharacter;
	static ItemSpecie: typeof ListItemSpecie = ListItemSpecie;
	static ItemPlanet: typeof ListItemPlanet = ListItemPlanet;
	static ItemStarship: typeof ListItemStarship = ListItemStarship;
	static ItemVehicle: typeof ListItemVehicle = ListItemVehicle;
}

List.Card = ListCard;
List.Group = ListGroup;
List.Item = ListItem;
List.ItemFilm = ListItemFilm;
List.ItemCharacter = ListItemCharacter;
List.ItemSpecie = ListItemSpecie;
List.ItemPlanet = ListItemPlanet;
List.ItemStarship = ListItemStarship;
List.ItemVehicle = ListItemVehicle;