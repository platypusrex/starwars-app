import * as React from 'react';
import PageHeader, { PageHeaderProps } from './PageHeader';
import { StatItem } from '../../utils/statsUtils';
import { Col, Row, Statistic, Typography } from 'antd';
import { Card } from '../Card';
import styled from '../../styled';
import { StatisticProps } from 'antd/lib/statistic/Statistic';

const StyledStatistic = styled(Statistic)<StatisticProps>`
	.ant-statistic-title {
		text-transform: uppercase;
		font-size: 12.5px;
		font-family: 'Oswald', sans-serif;
		color: #999;
	}
	
	.ant-statistic-content {
	 text-transform: capitalize;
	 font-size: 18px;
	}
`;

interface PageHeaderStats extends PageHeaderProps {
	statList: StatItem[];
	listTitle?: React.ReactNode;
}

const PageHeaderStats: React.FC<PageHeaderStats> = ({ statList, listTitle, ...pageHeaderProps }) => {
	return (
		<PageHeader {...pageHeaderProps}>
			{listTitle &&
			<Typography.Title level={4} style={{ marginTop: 30 }}>
				{listTitle}
			</Typography.Title>}

			<Row gutter={12} type="flex">
				{statList.map((stat, i) => (
					<Col key={i} md={6} sm={12} xs={24} style={{ marginBottom: 12 }}>
						<Card hoverable={true}>
							<StyledStatistic title={stat.label} value={stat.stat}/>
						</Card>
					</Col>
				))}
			</Row>
		</PageHeader>
	);
};

export default PageHeaderStats;