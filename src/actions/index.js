import uuid from 'uuid';

export const contactFormUpdate = ({ prop, value }) => ({
  type: 'contact_form_update',
  payload: {
    prop,
    value
  }
});

export const contactAdd = contact => dispatch => {
  fetch(`${process.env.REACT_APP_URL}/contacts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
      .then(response => response.json())
      .then(() => {
        dispatch({
          type: 'contact_add',
          contact
        });
        dispatch(contactFetch());
      });
};

export const contactDelete = id => dispatch => {
  fetch(`${process.env.REACT_APP_URL}/contacts/${id}`, {
    method: "DELETE"
  })
      .then(() => {
        dispatch({
          type: 'contact_delete',
          id
        });
        dispatch(contactFetch());
      });
};

export const contactEdit = contact => dispatch => {
  fetch(`${process.env.REACT_APP_URL}/contacts/${contact.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
      .then(() => {
        dispatch({
          type: 'contact_edit',
          contact
        });
        dispatch(contactFetch());
      });
};

export const contactFetch = () => dispatch => {
  fetch(`${process.env.REACT_APP_URL}/contacts`)
      .then(response => response.json())
      .then(json =>
        dispatch({
          type: 'contact_fetch',
          contacts: json
        }));
};
