import axios from 'axios';

export const getWorldData = () => dispatch => {
  dispatch(fetchWorldDataBegin());
  axios
    .get(
      'http://api.worldbank.org/v2/countries/WLD/indicators/SP.POP.TOTL/?format=json&date=1970:2017',
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

export const fetchWorldDataBegin = () => ({
  type: FETCH_WORLD_BEGIN,
});

export const fetchWorldDataSuccess = worldData => ({
  type: FETCH_WORLD_SUCCESS,
  payload: { worldData },
});

export const FETCH_WORLD_BEGIN = 'FETCH_WORLD_BEGIN';
export const FETCH_WORLD_SUCCESS = 'FETCH_WORLD_SUCCESS';
