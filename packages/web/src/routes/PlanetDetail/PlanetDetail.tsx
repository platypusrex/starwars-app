import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Empty } from 'antd';
import { Header } from '../../shared/components/Header';
import { List } from '../../shared/components/List';
import { usePlanetById } from '../../shared/hooks/api/planetHooks';
import { statList } from '../../shared/utils/statsUtils';

type Props = RouteComponentProps<{planetId: string}>;

export const PlanetDetail: React.FC<Props> = ({ match: { params } }) => {
	const planetId = parseInt(params.planetId, 10);
	const { planet, error } = usePlanetById(planetId, true);

	if (error) {
		return <Empty description={error.message}/>;
	}

	if (!planet) {
		return null;
	}

	return (
		<>
			<Header.PageStats
				title={planet.name}
				subTitle={`A detailed view of the planet, ${planet.name}.`}
				listTitle="Planet Stats"
				statList={statList.planet(planet)}
			/>

			<List.Group
				films={planet.films}
				characters={planet.residents}
			/>
		</>
	);
};