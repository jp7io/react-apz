export const contactFormUpdate = ({ prop, value }) => ({
  type: 'contact_form_update',
  payload: {
    prop,
    value
  }
});

export const contactAdd = contact => ({
  type: 'contact_add',
  contact
});

export const contactDelete = index => ({
  type: 'contact_delete',
  index
});
