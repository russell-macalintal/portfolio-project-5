import { combineReducers } from 'redux';
import ideasReducer from './ideasReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    ideas: ideasReducer,
    comments: commentsReducer
})

export default rootReducer;