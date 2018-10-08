import axios from 'axios';

export const getWorldFertData = () => dispatch => {
  dispatch(fetchWorldFertDataBegin());
  axios
    .get(
      'https://api.worldbank.org/v2/countries/WLD/indicators/SP.DYN.TFRT.IN/?format=json&date=1980:2016',
    )
    .then(res =>
      dispatch(
        fetchWorldFertDataSuccess(
          res.data[1].reverse().map(obj => ({
            value: obj.value,
            year: obj.date,
          })),
        ),
      ),
    );
};

export const getRegionFertData = () => dispatch => {
  dispatch(fetchRegionFertDataBegin());
  axios
    .get(
      'https://api.worldbank.org/v2/countries/EAS;ECS;LCN;MEA;SSF;NAC/indicators/SP.DYN.TFRT.IN/?format=json&date=1980:2016&per_page=250',
    )
    .then(res =>
      dispatch(
        fetchRegionFertDataSuccess(
          res.data[1].map(obj => ({
            value: obj.value,
            year: obj.date,
            region: obj.country.value,
          })),
        ),
      ),
    );
};

export const fetchWorldFertDataBegin = () => ({
  type: FETCH_WORLD_FERT_BEGIN,
});

export const fetchWorldFertDataSuccess = worldData => ({
  type: FETCH_WORLD_FERT_SUCCESS,
  payload: { worldData },
});

export const fetchRegionFertDataBegin = () => ({
  type: FETCH_REGION_FERT_BEGIN,
});

export const fetchRegionFertDataSuccess = regionData => ({
  type: FETCH_REGION_FERT_SUCCESS,
  payload: { regionData },
});

export const FETCH_WORLD_FERT_BEGIN = 'FETCH_WORLD_FERT_BEGIN';
export const FETCH_WORLD_FERT_SUCCESS = 'FETCH_WORLD_FERT_SUCCESS';
export const FETCH_REGION_FERT_BEGIN = 'FETCH_REGION_FERT_BEGIN';
export const FETCH_REGION_FERT_SUCCESS = 'FETCH_REGION_FERT_SUCCESS';
