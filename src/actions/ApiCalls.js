import axios from 'axios';

export const getWorldData = () => dispatch => {
  dispatch(fetchWorldDataBegin());
  axios
    .get(
      'https://api.worldbank.org/v2/countries/WLD/indicators/SP.POP.TOTL/?format=json&date=1980:2017',
    )
    .then(res =>
      dispatch(
        fetchWorldDataSuccess(
          res.data[1].map(obj => ({
            value: obj.value,
            year: obj.date,
          })),
        ),
      ),
    );
};

export const getRegionData = () => dispatch => {
  dispatch(fetchRegionDataBegin());
  axios
    .get(
      'https://api.worldbank.org/v2/countries/EAS;ECS;LCN;MEA;SSF;NAC/indicators/SP.POP.TOTL/?format=json&date=1980:2017&per_page=200',
    )
    .then(res =>
      dispatch(
        fetchRegionDataSuccess(
          res.data[1].map(obj => ({
            value: obj.value,
            year: obj.date,
            region: obj.country.value,
          })),
        ),
      ),
    );
};

export const fetchWorldDataBegin = () => ({
  type: FETCH_WORLD_BEGIN,
});

export const fetchWorldDataSuccess = worldData => ({
  type: FETCH_WORLD_SUCCESS,
  payload: { worldData },
});

export const fetchRegionDataBegin = () => ({
  type: FETCH_REGION_BEGIN,
});

export const fetchRegionDataSuccess = regionData => ({
  type: FETCH_REGION_SUCCESS,
  payload: { regionData },
});

export const FETCH_WORLD_BEGIN = 'FETCH_WORLD_BEGIN';
export const FETCH_WORLD_SUCCESS = 'FETCH_WORLD_SUCCESS';
export const FETCH_REGION_BEGIN = 'FETCH_REGION_BEGIN';
export const FETCH_REGION_SUCCESS = 'FETCH_REGION_SUCCESS';
