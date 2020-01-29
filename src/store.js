import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger' /* eslint no-unused-vars: 0 */


const middleware = [
  thunkMiddleware,
]

if (process.env.CLIENT_ENV !== 'production') {
  middleware.push(createLogger())
}
const store = createStore(rootReducer, compose(
  applyMiddleware(...middleware),
  typeof window === 'object'
    && typeof window.devToolsExtensions !== 'undefined' ? window.devToolsExtensions() : f => f
))
export default store