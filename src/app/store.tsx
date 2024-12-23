import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../reducers/reducers';

export const store = createStore(
  rootReducer, // combined reducers can be used 
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export type AppDispatch = typeof store.dispatch;
