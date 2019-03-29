import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Empty } from 'antd';
import { Header } from '../../shared/components/Header';
import { List } from '../../shared/components/List';
import { useCharacterById } from '../../shared/hooks/api/characterHooks';
import { statList } from '../../shared/utils/statsUtils';

type Props = RouteComponentProps<{characterId: string}>;

export const CharacterDetail: React.FC<Props> = ({ match: { params } }) => {
	const characterId = parseInt(params.characterId, 10);
	const { character, error } = useCharacterById(characterId, true);

	if (error) {
		return <Empty description={error.message}/>;
	}

	if (!character) {
		return null;
	}

	return (
		<>
			<Header.PageStats
				title={character.name}
				subTitle={`A detailed view of the character, ${character.name}.`}
				listTitle="Character Stats"
				statList={statList.character(character)}
			/>

			<List.Group
				films={character.films}
				species={character.species}
				planets={[character.homeworld]}
				starships={character.starships}
				vehicles={character.vehicles}
			/>
		</>
	);
};