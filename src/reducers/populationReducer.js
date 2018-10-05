import {
  FETCH_WORLD_BEGIN,
  FETCH_WORLD_SUCCESS,
  FETCH_REGION_BEGIN,
  FETCH_REGION_SUCCESS,
} from '../actions/ApiCalls';

const populationInitialState = {
  worldPop: [],
  worldPopLoading: false,
  regionPop: [],
  regionPopLoading: false,
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
    case FETCH_REGION_BEGIN:
      return {
        ...state,
        regionPopLoading: true,
      };
    case FETCH_REGION_SUCCESS:
      return {
        ...state,
        regionPopLoading: false,
        regionPop: action.payload.regionData,
      };
    default:
      return state;
  }
};
