import { combineReducers } from 'redux';
import { contactFormReducer } from './contactFormReducer';
import { contactsReducer } from './contactsReducer';

export default combineReducers({
  contacts: contactsReducer,
  contactForm: contactFormReducer
});
