import { useEffect, useState } from 'react';
import * as H from 'history';
import { Routes } from '../constants/routes';

interface State {
	currentPage: number;
}
const initialState = {
	currentPage: 1,
};

export function usePagination (location: H.Location, history: H.History) {
	const [ state, setState ] = useState<State>(initialState);

	const pageParams = new URLSearchParams(location.search);
	const page = pageParams.get('page');
	const currentPage = page ? parseInt(page, 10) : 1;

	useEffect(() => {
		setState(ss => ({ ...ss, currentPage }));
	}, [location.search]);

	const setCurrentPage = (page: number, route: Routes) => {
		const pageNumber = page > 1 ? `?page=${page}` : '';
		history.push(`${route}${pageNumber}`);
	};

	return { ...state, setCurrentPage };
}