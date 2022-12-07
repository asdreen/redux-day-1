import { GET_A_JOB, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../actions/index";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_A_JOB:
      return {
        ...state,
        jobs: action.payload,
      };
    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
