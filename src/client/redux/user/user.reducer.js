import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  usersList: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        ...state,
        usersList: action.payload.data
      };
    default:
      return state;
  }
};

export default userReducer;