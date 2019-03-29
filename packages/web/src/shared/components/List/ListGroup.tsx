import * as React from 'react';
import { Col, Row } from 'antd';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';
import { List } from './index';

interface ListGroupProps {
	films?: string[];
	characters?: string[];
	species?: string[];
	planets?: string[];
	starships?: string[];
	vehicles?: string[];
}

const ListGroup: React.FC<ListGroupProps> = (props) => {
	const { films, characters, species, planets, starships, vehicles } = props;

	return (
		<Row gutter={16}>
			<Col xs={24} sm={12}>
				<Row>
					{characters &&
					<Col span={24}>
						<List.Card
							title="Characters"
							dataSource={characters}
							renderItem={(characterUrl: string) => (
								<List.ItemCharacter id={extractIdFromUrl(characterUrl)}/>
							)}
						/>
					</Col>}

					{planets &&
					<Col span={24}>
						<List.Card
							title="Planets"
							dataSource={planets}
							renderItem={(planetUrl: string) => (
								<List.ItemPlanet id={extractIdFromUrl(planetUrl)}/>
							)}
						/>
					</Col>}

					{starships &&
					<Col span={24}>
						<List.Card
							title="Starships"
							dataSource={starships}
							renderItem={(starshipUrl: string) => (
								<List.ItemStarship id={extractIdFromUrl(starshipUrl)}/>
							)}
						/>
					</Col>}
				</Row>
			</Col>

			<Col xs={24} sm={12}>
				<Row>
					{species &&
					<Col span={24}>
						<List.Card
							title="Species"
							dataSource={species}
							renderItem={(specieUrl: string) => (
								<List.ItemSpecie id={extractIdFromUrl(specieUrl)}/>
							)}
						/>
					</Col>}

					{films &&
					<Col span={24}>
						<List.Card
							title="Films"
							dataSource={films}
							renderItem={(filmUrl: string) => (
								<List.ItemFilm id={extractIdFromUrl(filmUrl)}/>
							)}
						/>
					</Col>}

					{vehicles &&
					<Col span={24}>
						<List.Card
							title="Vehicles"
							dataSource={vehicles}
							renderItem={(vehicleUrl: string) => (
								<List.ItemVehicle id={extractIdFromUrl(vehicleUrl)}/>
							)}
						/>
					</Col>}
				</Row>
			</Col>
		</Row>
	);
};

export default ListGroup;