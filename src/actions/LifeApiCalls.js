import axios from 'axios';

export const getWorldLifeData = () => dispatch => {
  dispatch(fetchWorldLifeDataBegin());
  axios
    .get(
      'https://api.worldbank.org/v2/countries/WLD/indicators/SP.DYN.LE00.IN/?format=json&date=1980:2016',
    )
    .then(res =>
      dispatch(
        fetchWorldLifeDataSuccess(
          res.data[1].reverse().map(obj => ({
            value: obj.value,
            year: obj.date,
          })),
        ),
      ),
    );
};

export const getRegionLifeData = () => dispatch => {
  dispatch(fetchRegionLifeDataBegin());
  axios
    .get(
      'https://api.worldbank.org/v2/countries/EAS;ECS;LCN;MEA;SSF;NAC/indicators/SP.DYN.LE00.IN/?format=json&date=1980:2016&per_page=250',
    )
    .then(res =>
      dispatch(
        fetchRegionLifeDataSuccess(
          res.data[1].map(obj => ({
            value: obj.value,
            year: obj.date,
            region: obj.country.value,
          })),
        ),
      ),
    );
};

export const fetchWorldLifeDataBegin = () => ({
  type: FETCH_WORLD_LIFE_BEGIN,
});

export const fetchWorldLifeDataSuccess = worldData => ({
  type: FETCH_WORLD_LIFE_SUCCESS,
  payload: { worldData },
});

export const fetchRegionLifeDataBegin = () => ({
  type: FETCH_REGION_LIFE_BEGIN,
});

export const fetchRegionLifeDataSuccess = regionData => ({
  type: FETCH_REGION_LIFE_SUCCESS,
  payload: { regionData },
});

export const FETCH_WORLD_LIFE_BEGIN = 'FETCH_WORLD_LIFE_BEGIN';
export const FETCH_WORLD_LIFE_SUCCESS = 'FETCH_WORLD_LIFE_SUCCESS';
export const FETCH_REGION_LIFE_BEGIN = 'FETCH_REGION_LIFE_BEGIN';
export const FETCH_REGION_LIFE_SUCCESS = 'FETCH_REGION_LIFE_SUCCESS';
