import { FETCH_WORLD_BEGIN, FETCH_WORLD_SUCCESS } from '../actions/ApiCalls';

const populationInitialState = {
  worldPop: [],
  worldPopLoading: false,
};

export default (state = populationInitialState, action) => {
  switch (action.type) {
    case FETCH_WORLD_BEGIN:
      return {
        ...state,
        worldPopLoading: true,
      };
    case FETCH_WORLD_SUCCESS:
      return {
        ...state,
        worldPopLoading: false,
        worldPop: action.payload.worldData,
      };
    default:
      return state;
  }
};
