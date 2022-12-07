export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_A_JOB = "GET_A_JOB";
export const SAVE_THE_VALUE = "SAVE_THE_VALUE";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const addToFavouriteAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};
export const removeFromFavouriteAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: i,
  };
};
export const saveSearchInput = (value) => {
  return {
    type: SAVE_THE_VALUE,
    payload: value,
  };
};

export const getJobAction = (endPoint) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_JOBS_LOADING,
        payload: true,
      });
      const response = await fetch(baseEndpoint + endPoint + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS_ERROR,
          payload: false,
        });
        dispatch({
          type: GET_A_JOB,
          payload: data,
        });
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
        alert("Error fetching results");
      }
    } catch (error) {
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true,
      });
      console.log(error);
    }
  };
};
