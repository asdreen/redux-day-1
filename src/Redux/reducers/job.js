import { GET_A_JOB } from "../actions/index";

const initialState = {
  jobs: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_A_JOB:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
