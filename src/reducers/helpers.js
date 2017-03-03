export const reduceFetch = (state, payload, key) => ({
  ...state,
  [key]: payload
})

export const reduceAdd = (state, payload, key) => ({
  ...state,
  [key]: state[key].concat(payload)
});

const findIndex = (coll, id) => coll.findIndex(item => item._id === id);

export const reduceEdit = (state, payload, key) => {
  const index = findIndex(state[key], payload.id);

  return {
    ...state,
    [key]: [
      ...state[key].slice(0, index),
      payload,
      ...state[key].slice(index + 1)
    ]
  };
};

export const reduceDelete = (state, payload, key) => {
  const index = findIndex(state[key], payload);

  return {
    ...state,
    [key]: [
      ...state[key].slice(0, index),
      ...state[key].slice(index + 1)
    ]
  };
};
