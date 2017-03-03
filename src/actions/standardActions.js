export const standardFetch = (route, type) => dispatch => {
  const key = route.substr(1);
  fetch(route)
    .then(response => response.json())
    .then(json => {
      dispatch({
        type,
        [key]: json
      });
    });
};

const standardDmlFetch = (route, method, payload) =>
  fetch(route, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

export const standardAdd = (route, key, type, payload) => dispatch => {
  standardDmlFetch(route, 'POST', payload)
    .then(response => response.json())
    .then(json => {
      dispatch({
        type,
        [key]: json
      });
    });
};

export const standardEdit = (route, key, type, payload) => dispatch => {
  standardDmlFetch(route, 'PUT', payload)
    .then(() => {
      dispatch({
        type,
        [key]: payload
      });
    });
};

export const standardDelete = (route, key, type, payload) => dispatch => {
  fetch(route, {
    method: "DELETE"
  })
    .then(() => {
      dispatch({
        type,
        [key]: payload
      });
    });
};
