import axios from 'axios';

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS';
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const SEARCH_DOG = 'SEARCH_DOG';
export const GET_DOG_BY_ID = 'GET_DOG_BY_ID';
export const DOG_CREATE = 'DOG_CREATE';

export let getDog = () => {
	return async (dispatch) => {
		return axios.get('/dogs').then((response) => {
			dispatch({type: GET_ALL_DOGS, payload: response.data});
		});
	};
};

export let getTemperaments = () => {
	return async (dispatch) => {
		return axios.get('/temperaments').then((response) => {
			dispatch({type: GET_ALL_TEMPERAMENTS, payload: response.data});
		});
	};
};

export let filterByTemperament = (value) => {
	return {
		type: FILTER_BY_TEMPERAMENT,
		payload: value,
	};
};

export let filerCreated = (value) => {
	return {
		type: FILTER_CREATED,
		payload: value,
	};
};

export let orderByName = (value) => {
	return {
		type: ORDER_BY_NAME,
		payload: value,
	};
};

export let orderByWeight = (value) => {
	return {
		type: ORDER_BY_WEIGHT,
		payload: value,
	};
};

export let searchDog = (name) => {
	return async (dispatch) => {
		return axios.get(`/dogs?name=${name}`).then((response) => {
			dispatch({type: SEARCH_DOG, payload: response.data});
		});
	};
};

export let getDogById = (id) => {
	return async (dispatch) => {
		try {
			return axios.get(`/dogs/${id}`).then((response) => {
				dispatch({type: GET_DOG_BY_ID, payload: response.data});
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export let postDog = (payload) => {
	return async () => {
		let dog = await axios.post('/dogs', payload);
		return dog;
	};
};
