import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import citiesReducer from './citiesReducer';
import contactsReducer from './contactsReducer';

export default combineReducers({
  contacts: contactsReducer,
  cities: citiesReducer,
  form: formReducer
});
