export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_A_JOB = "GET_A_JOB";
export const SAVE_THE_VALUE = "SAVE_THE_VALUE";

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
      let response = await fetch(baseEndpoint + endPoint);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({
          type: GET_A_JOB,
          payload: data,
        });
      } else {
        console.log("Error fetching");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
