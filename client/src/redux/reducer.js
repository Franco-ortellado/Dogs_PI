import {
	GET_ALL_DOGS,
	FILTER_BY_TEMPERAMENT,
	GET_ALL_TEMPERAMENTS,
	FILTER_CREATED,
	ORDER_BY_NAME,
	ORDER_BY_WEIGHT,
	SEARCH_DOG,
	GET_DOG_BY_ID,
	DOG_CREATE,
} from './actions';

import filterDogsByTemp from '../funcions/filterDogsByTemp';
import transformTemperaments from '../funcions/transformTemperaments';
import sortDogs from '../funcions/sortDogs';
import orderByWeight from '../funcions/orderByWeight';

const initialState = {
	dogs: [],
	dogs_backup: [],
	dogDetail: {},
	temperaments: [],
	dogsFilter: [],
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_DOGS:
			let transformedDogs = transformTemperaments(action.payload);
			return {
				...state,
				dogs: transformedDogs,
				dogs_backup: transformedDogs,
			};

		case GET_ALL_TEMPERAMENTS:
			return {
				...state,
				temperaments: action.payload,
			};

		case FILTER_BY_TEMPERAMENT:
			let alldogs = state.dogs_backup;

			let filterDogs = filterDogsByTemp(alldogs, action.payload);

			return {
				...state,
				dogs: filterDogs,
			};

		case FILTER_CREATED:
			let allDogs = state.dogs_backup;

			let filter_created =
				action.payload === 'db'
					? allDogs.filter((e) => e.createdInDb)
					: allDogs.filter((e) => !e.createdInDb);

			return {
				...state,
				dogs:
					action.payload === 'all'
						? state.dogs_backup
						: filter_created,
			};

		case ORDER_BY_NAME:
			let OrderDogs = sortDogs(state.dogs, action.payload);

			return {
				...state,
				dogs: OrderDogs,
			};

		case ORDER_BY_WEIGHT:
			let weightOrder = orderByWeight(state.dogs, action.payload);

			return {
				...state,
				dogs: weightOrder,
			};

		case SEARCH_DOG:
			let Dogs_search = transformTemperaments(action.payload);

			return {
				...state,
				dogs: Dogs_search,
			};

		case GET_DOG_BY_ID:
			let Dog = [action.payload];
			let DogById = transformTemperaments(Dog);

			return {
				...state,
				dogDetail: DogById,
			};

		case DOG_CREATE:
			return {
				...state,
			};

		default:
			return {...state};
	}
}
