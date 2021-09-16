import  {combineReducers,createStore } from 'redux' 
import phoneReducer from './phone-reducer';

const rootReducer = combineReducers({
    phones: phoneReducer,

});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
const store = createStore(rootReducer);

export default store;