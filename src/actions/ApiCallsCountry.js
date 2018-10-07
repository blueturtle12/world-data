import axios from 'axios';

export const getAllCountriesData = () => dispatch => {
  dispatch(fetchAllCountriesBegin());
  axios.get('https://restcountries.eu/rest/v2/all').then(res =>
    dispatch(
      fetchAllCountriesSuccess(
        res.data.map(obj => ({
          name: obj.name,
          alpha2Code: obj.alpha2Code,
          flag: obj.flag,
        })),
      ),
    ),
  );
};

export const fetchAllCountriesBegin = () => ({
  type: FETCH_ALL_COUNTRIES_BEGIN,
});

export const fetchAllCountriesSuccess = data => ({
  type: FETCH_ALL_COUNTRIES_SUCCESS,
  payload: { data },
});

export const FETCH_ALL_COUNTRIES_BEGIN = 'FETCH_ALL_COUNTRIES_BEGIN';
export const FETCH_ALL_COUNTRIES_SUCCESS = 'FETCH_ALL_COUNTRIES_SUCCESS';
