import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Col, Pagination, Row } from 'antd';
import { Card } from '../../shared/components/Card';
import { Header } from '../../shared/components/Header';
import { Flex } from '../../shared/components/Flex';
import { useCharacters } from '../../shared/hooks/api/characterHooks';
import { usePagination } from '../../shared/hooks/usePagination';
import { Routes } from '../../shared/constants/routes';

const colProps = { xs: 24, sm: 12, md: 8, lg: 6, style: { marginBottom: 16 } };

export const Characters: React.FC<RouteComponentProps<{}>> = ({ location, history }) => {
	const { currentPage, setCurrentPage } = usePagination(location, history);
	const { characters, count, loading } = useCharacters(currentPage);

	const content = loading ? (
		<>
			{[...Array(12)].map((number, i) => (
				<Col key={i} {...colProps}>
					<Card loading={true}/>
				</Col>
			))}
		</>
	) : (
		<>
			{characters.map((character, i) => (
				<Col key={i} {...colProps}>
					<Card.Character character={character} style={{ minWidth: 'unset', margin: 0}}/>
				</Col>
			))}
		</>
	);

	return (
		<>
			<Header.Page
				title="Characters"
				subTitle="A comprehensive list of all Star Wars characters. Dig in to find out more."
			/>

			<Row type="flex" justify="center" gutter={16}>
				{content}
			</Row>

			<Flex centerAll={true}>
				<Pagination
					total={count}
					current={currentPage}
					onChange={(page) => setCurrentPage(page, Routes.CHARACTERS)}
				/>
			</Flex>
		</>
	);
};