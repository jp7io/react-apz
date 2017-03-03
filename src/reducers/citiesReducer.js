import { reduceFetch, reduceAdd, reduceEdit, reduceDelete } from './helpers';

const initialState = {
  cityList: []
};

const key = 'cityList';

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CITY_FETCH':
      return reduceFetch(state, action.cities, key);
    case 'CITY_ADD':
      return reduceAdd(state, action.city, key);
    case 'CITY_EDIT':
      return reduceEdit(state, action.city, key);
    case 'CITY_DELETE':
      return reduceDelete(state, action.id, key);
    default:
      return state;
  }
}


export default citiesReducer;
