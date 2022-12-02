const initialState = {
  jobs: {
    content: [], // we're going to put our books here!
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: [...state.jobs.content, action.payload],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
