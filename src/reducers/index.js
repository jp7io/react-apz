import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import { contactFormReducer } from './contactFormReducer';
import { contactsReducer } from './contactsReducer';

export default combineReducers({
  contacts: contactsReducer,
  // contactForm: contactFormReducer
  form: formReducer
});
