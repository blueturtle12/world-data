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

export const fetchCountryDataName = payload => ({
  type: 'FETCH_COUNTRY_DATA_NAME',
  payload,
});

export const fetchCountryDataSuccess = data => ({
  type: FETCH_COUNTRY_DATA_SUCCESS,
  payload: { data },
});

export const FETCH_COUNTRY_DATA_BEGIN = 'FETCH_COUNTRY_DATA_BEGIN';
export const FETCH_COUNTRY_DATA_SUCCESS = 'FETCH_COUNTRY_DATA_SUCCESS';

export const getCountryLifeData = country => dispatch => {
  dispatch(fetchCountryLifeDataBegin());
  axios
    .get(
      `https://api.worldbank.org/v2/countries/${country}/indicators/SP.DYN.LE00.IN/?format=json&date=1980:2016&per_page=500`,
    )
    .then(res =>
      dispatch(
        fetchCountryLifeDataSuccess(
          res.data[1].reverse().map(obj => ({
            value: obj.value,
            year: obj.date,
          })),
        ),
      ),
    );
};

export const fetchCountryLifeDataBegin = () => ({
  type: FETCH_COUNTRY_LIFE_DATA_BEGIN,
});

export const fetchCountryLifeDataSuccess = data => ({
  type: FETCH_COUNTRY_LIFE_DATA_SUCCESS,
  payload: { data },
});

export const FETCH_COUNTRY_LIFE_DATA_BEGIN = 'FETCH_COUNTRY_LIFE_DATA_BEGIN';
export const FETCH_COUNTRY_LIFE_DATA_SUCCESS =
  'FETCH_COUNTRY_LIFE_DATA_SUCCESS';

export const getCountryFertData = country => dispatch => {
  dispatch(fetchCountryFertDataBegin());
  axios
    .get(
      `https://api.worldbank.org/v2/countries/${country}/indicators/SP.DYN.TFRT.IN/?format=json&date=1980:2016&per_page=500`,
    )
    .then(res =>
      dispatch(
        fetchCountryFertDataSuccess(
          res.data[1].reverse().map(obj => ({
            value: obj.value,
            year: obj.date,
          })),
        ),
      ),
    );
};

export const fetchCountryFertDataBegin = () => ({
  type: FETCH_COUNTRY_FERT_DATA_BEGIN,
});

export const fetchCountryFertDataSuccess = data => ({
  type: FETCH_COUNTRY_FERT_DATA_SUCCESS,
  payload: { data },
});

export const FETCH_COUNTRY_FERT_DATA_BEGIN = 'FETCH_COUNTRY_FERT_DATA_BEGIN';
export const FETCH_COUNTRY_FERT_DATA_SUCCESS =
  'FETCH_COUNTRY_FERT_DATA_SUCCESS';
