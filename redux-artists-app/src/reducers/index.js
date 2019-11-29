import { combineReducers } from 'redux';
import artistsContainer from './artists_reducer';

const rootReducer = combineReducers({
    artistsContainer
});

export default rootReducer