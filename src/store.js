import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import populationReducer from './reducers/populationReducer';
import countryListReducer from './reducers/countriesDataReducer';
import lifeReducer from './reducers/lifeExpReducer';
import fertReducer from './reducers/fertilityReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux store

export default () => {
  const store = createStore(
    combineReducers({
      population: populationReducer,
      countryList: countryListReducer,
      life: lifeReducer,
      fert: fertReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
