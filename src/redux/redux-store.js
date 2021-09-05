import  {combineReducers,createStore } from 'redux' 
import phoneReducer from './phone-reducer';

const reducers = combineReducers({
    phones: phoneReducer,

});
const store = createStore(reducers);

export default store;