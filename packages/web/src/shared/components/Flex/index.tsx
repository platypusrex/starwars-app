import * as React from 'react';
import styled from '../../styled';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexAlign = 'initial' | 'inherit' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexJustify =
	'initial' | 'inherit' | 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between';

export interface FlexProps {
	column?: boolean;
	centerAll?: boolean;
	direction?: FlexDirection;
	alignItems?: FlexAlign;
	justifyContent?: FlexJustify;
	flexWrap?: FlexWrap;
	onClick?: () => void;
	style?: React.CSSProperties;
	className?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  ${props => props.direction && `flex-direction: ${props.direction};`}
  align-items: ${props => props.alignItems && props.alignItems};
  justify-content: ${props => props.justifyContent && props.justifyContent};
  ${props => props.centerAll && 'align-items: center; justify-content: center;'};
  ${props => props.flexWrap && `flex-wrap: ${props.flexWrap}`}
` as React.FC<FlexProps>;