import {
  FETCH_WORLD_FERT_BEGIN,
  FETCH_WORLD_FERT_SUCCESS,
  FETCH_REGION_FERT_BEGIN,
  FETCH_REGION_FERT_SUCCESS,
} from '../actions/FertApiCalls';

const fertilityInitialState = {
  worldFert: [],
  worldFertLoading: false,
  regionFert: [],
  regionFertLoading: false,
};

export default (state = fertilityInitialState, action) => {
  switch (action.type) {
    case FETCH_WORLD_FERT_BEGIN:
      return {
        ...state,
        worldFertLoading: true,
      };
    case FETCH_WORLD_FERT_SUCCESS:
      return {
        ...state,
        worldFertLoading: false,
        worldFert: action.payload.worldData,
      };
    case FETCH_REGION_FERT_BEGIN:
      return {
        ...state,
        regionFertLoading: true,
      };
    case FETCH_REGION_FERT_SUCCESS:
      return {
        ...state,
        regionFertLoading: false,
        regionFert: action.payload.regionData,
      };
    default:
      return state;
  }
};
