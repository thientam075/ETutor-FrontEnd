import { Actions } from "./action";

export const initialState = {
  auth: {
    user: {},
  }
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Actions.UPDATE_AUTH:
      return {
        ...state,
        auth: payload,
      }
    default:
      return state;
  }
}