export const INCREASE = "@counter/increase";
export const increase = (value) => ({
  type: INCREASE,
  payload: {
    value,
  },
});

export const DECREASE = "@counter/decrease";
export const decrease = (value) => ({
  type: DECREASE,
  payload: {
    value,
  },
});

export const asyncIncrease = (value) => (dispatch) => {
  setTimeout(() => {
    dispatch(increase(value));
  }, 1000);
};
