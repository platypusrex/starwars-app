import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Empty } from 'antd';
import { Header } from '../../shared/components/Header';
import { List } from '../../shared/components/List';
import { useStarshipById } from '../../shared/hooks/api/starshipHooks';
import { statList } from '../../shared/utils/statsUtils';

type Props = RouteComponentProps<{starshipId: string}>;

export const StarshipDetail: React.FC<Props> = ({ match: { params } }) => {
	const starshipId = parseInt(params.starshipId, 10);
	const { starship, error } = useStarshipById(starshipId, true);

	if (error) {
		return <Empty description={error.message}/>;
	}

	if (!starship) {
		return null;
	}

	return (
		<>
			<Header.PageStats
				title={starship.name}
				subTitle={`A detailed view of the starship, ${starship.name}.`}
				listTitle="Starship Stats"
				statList={statList.starship(starship)}
			/>

			<List.Group
				films={starship.films}
				characters={starship.pilots}
			/>
		</>
	);
};