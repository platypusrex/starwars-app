import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Empty } from 'antd';
import { Header } from '../../shared/components/Header';
import { List } from '../../shared/components/List';
import { useSpecieById } from '../../shared/hooks/api/specieHooks';
import { statList } from '../../shared/utils/statsUtils';

type Props = RouteComponentProps<{specieId: string}>;

export const SpecieDetail: React.FC<Props> = ({ match: { params } }) => {
	const specieId = parseInt(params.specieId, 10);
	const { specie, error } = useSpecieById(specieId, true);

	if (error) {
		return <Empty description={error.message}/>;
	}

	if (!specie) {
		return null;
	}

	return (
		<>
			<Header.PageStats
				title={specie.name}
				subTitle={`A detailed view of the specie, ${specie.name}.`}
				listTitle="Specie Stats"
				statList={statList.specie(specie)}
			/>

			<List.Group
				films={specie.films}
				characters={specie.people}
				planets={[specie.homeworld]}
			/>
		</>
	);
};