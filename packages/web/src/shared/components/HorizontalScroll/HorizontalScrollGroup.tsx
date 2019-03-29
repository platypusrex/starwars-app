import * as React from 'react';
import { Card } from '../Card';
import HorizontalScrollWrapper from './HorizontalScrollWrapper';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';
import { useCharacterById } from '../../hooks/api/characterHooks';
import { useFilmById } from '../../hooks/api/filmHooks';
import { useSpecieById } from '../../hooks/api/specieHooks';
import { usePlanetById } from '../../hooks/api/planetHooks';
import { useStarshipById } from '../../hooks/api/starshipHooks';
import { useVehicleById } from '../../hooks/api/vehicleHooks';

interface HorizontalScrollGroupProps {
	films?: string[];
	characters?: string[];
	species?: string[];
	planets?: string[];
	starships?: string[];
	vehicles?: string[];
}

const HorizontalScrollGroup: React.FC<HorizontalScrollGroupProps> = (props) => {
	const { films, characters, species, planets, starships, vehicles } = props;

	return (
		<>
			{films &&
			<HorizontalScrollWrapper
				title="Films"
				dataSource={films}
				renderItem={(filmUrl) => {
					const { film, loading } = useFilmById(extractIdFromUrl(filmUrl));
					return <Card.Film film={film} loading={loading}/>
				}}
			/>}

			{characters &&
			<HorizontalScrollWrapper
				title="Characters"
				dataSource={characters}
				renderItem={(characterUrl) => {
					const { character, loading } = useCharacterById(extractIdFromUrl(characterUrl));
					return <Card.Character character={character} loading={loading}/>
				}}
			/>}

			{species &&
			<HorizontalScrollWrapper
				title="Species"
				dataSource={species}
				renderItem={(specieUrl) => {
					const { specie, loading } = useSpecieById(extractIdFromUrl(specieUrl));
					return <Card.Specie specie={specie} loading={loading}/>;
				}}
			/>}

			{planets &&
			<HorizontalScrollWrapper
				title="Planets"
				dataSource={planets}
				renderItem={(planetUrl) => {
					const { planet, loading } = usePlanetById(extractIdFromUrl(planetUrl));
					return <Card.Planet planet={planet} loading={loading}/>
				}}
			/>}

			{starships &&
			<HorizontalScrollWrapper
				title="Starships"
				dataSource={starships}
				renderItem={(starshipUrl) => {
					const { starship, loading } = useStarshipById(extractIdFromUrl(starshipUrl));
					return <Card.Starship starship={starship} loading={loading}/>;
				}}
			/>}

			{vehicles &&
			<HorizontalScrollWrapper
				title="Vehicles"
				dataSource={vehicles}
				renderItem={(vehicleUrl) => {
					const { vehicle, loading } = useVehicleById(extractIdFromUrl(vehicleUrl));
					return <Card.Vehicle vehicle={vehicle} loading={loading}/>;
				}}
			/>}
		</>
	);
};

export default HorizontalScrollGroup;