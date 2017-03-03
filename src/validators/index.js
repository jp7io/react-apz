export const fieldRequired = value => value && value.length > 0;

export const maxLength = length => value => value && value.length <= length;

export const phoneFormat = value => value && /^\+1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/.test(value);

export const phoneUnique = values => {
  const { phone, id } = values;
  return fetch(`/api/contacts?phone=${btoa(phone)}&id=${id}`)
    .then(response => response.json())
    .then(json => {
      if (json.length > 0) {
        // eslint-disable-next-line
        throw { phone: 'This phone number already exists.' };
      }
    });
}
