import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import api from '../middlewares/api';
import reducer from '../reducers';
import { INITIAL_STATE } from '../constants';

const enhancer = applyMiddleware(thunk, api);

export default (initialState = INITIAL_STATE) => (
  createStore(reducer, initialState, enhancer)
);
