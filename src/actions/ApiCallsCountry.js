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

export const getCountryData = country => dispatch => {
  dispatch(fetchCountryDataBegin());
  axios
    .get(
      `https://api.worldbank.org/v2/countries/${country}/indicators/SP.POP.TOTL?format=json&date=1980:2017&per_page=500`,
    )
    .then(res =>
      dispatch(
        fetchCountryDataSuccess(
          res.data[1].reverse().map(obj => ({
            value: obj.value,
            year: obj.date,
          })),
        ),
      ),
    );
};

export const fetchCountryDataBegin = () => ({
  type: FETCH_COUNTRY_DATA_BEGIN,
});

export const fetchCountryDataSuccess = data => ({
  type: FETCH_COUNTRY_DATA_SUCCESS,
  payload: { data },
});

export const FETCH_COUNTRY_DATA_BEGIN = 'FETCH_COUNTRY_DATA_BEGIN';
export const FETCH_COUNTRY_DATA_SUCCESS = 'FETCH_COUNTRY_DATA_SUCCESS';
