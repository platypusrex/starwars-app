import * as React from 'react';
import { Typography } from 'antd';
import { Card } from './index';
import { ScrollCard } from './ScrollCard';
import { Link } from '../Link';
import { CardProps } from 'antd/lib/card';
import { Film } from '../../types/generated';

interface FilmCardProps extends CardProps {
	film?: Film;
	loading?: boolean;
}

const CardFilm: React.FC<FilmCardProps> = ({ film, loading, ...cardProps }) => {
	return (
		<ScrollCard loading={loading} {...cardProps}>
			{film &&
			<>
				<Card.Meta title={film.title} description={film.director}/>

				<Typography.Paragraph ellipsis={{ rows: 3, expandable: false }}>
					{film.opening_crawl}
				</Typography.Paragraph>

				<Link.Film film={film}>
					View details
				</Link.Film>
			</>}
		</ScrollCard>
	);
};

export default CardFilm;