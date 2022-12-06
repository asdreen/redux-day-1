import {
  SAVE_THE_VALUE,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../actions";

const initialState = {
  content: [], // we're going to put our books here!
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,

        content: [...state.jobs.content, action.payload],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,

        content: state.jobs.content.filter((job, i) => {
          return i !== action.payload;
        }),
      };
    case SAVE_THE_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
