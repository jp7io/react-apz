import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cityFormReducer from './cityFormReducer';
import citiesReducer from './citiesReducer';
import contactsReducer from './contactsReducer';

export default combineReducers({
  contacts: contactsReducer,
  // contactForm: contactFormReducer
  form: formReducer
});
