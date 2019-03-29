import * as React from 'react';
import { Card as AntCard } from 'antd';
import { CardProps } from 'antd/lib/card';
import styled from '../../styled';

const StyledCard = styled(AntCard)<CardProps>`
  
` as React.FC<CardProps>;

export default StyledCard;