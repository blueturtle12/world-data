import {
  FETCH_WORLD_LIFE_BEGIN,
  FETCH_WORLD_LIFE_SUCCESS,
  FETCH_REGION_LIFE_BEGIN,
  FETCH_REGION_LIFE_SUCCESS,
} from '../actions/LifeApiCalls';

const fertilityInitialState = {
  worldLife: [],
  worldLifeLoading: false,
  regionLife: [],
  regionLifeLoading: false,
};

export default (state = fertilityInitialState, action) => {
  switch (action.type) {
    case FETCH_WORLD_LIFE_BEGIN:
      return {
        ...state,
        worldLifeLoading: true,
      };
    case FETCH_WORLD_LIFE_SUCCESS:
      return {
        ...state,
        worldLifeLoading: false,
        worldLife: action.payload.worldData,
      };
    case FETCH_REGION_LIFE_BEGIN:
      return {
        ...state,
        regionLifeLoading: true,
      };
    case FETCH_REGION_LIFE_SUCCESS:
      return {
        ...state,
        regionLifeLoading: false,
        regionLife: action.payload.regionData,
      };
    default:
      return state;
  }
};
