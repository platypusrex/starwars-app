import * as React from 'react';
import { Row, Col } from 'antd';
import { Header } from '../../shared/components/Header';
import { Card } from '../../shared/components/Card';
import { useFilms } from '../../shared/hooks/api/filmHooks';

const colProps = { xs: 24, sm: 12, md: 8, lg: 6, style: { marginBottom: 16 } };

export const Home: React.FC<{}> = () => {
	const { films, loading } = useFilms();

	const content = loading ? (
		<>
			{[...Array(7)].map((number, i) => (
				<Col key={i} {...colProps}>
					<Card loading={true}/>
				</Col>
			))}
		</>
	) : (
		<>
			{films.map((film) => (
				<Col key={film.episode_id} {...colProps}>
					<Card.Film film={film} style={{ minWidth: 'unset', margin: 0}}/>
				</Col>
			))}
		</>
	);

	return (
		<>
			<Header.Page
				title="Films"
				subTitle="A comprehensive list of all Starwars films. Dig in to find out more."
			/>

			<Row type="flex" justify="center" gutter={16}>
				{content}
			</Row>
		</>
	);
};