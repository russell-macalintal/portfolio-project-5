import { combineReducers } from 'redux';
import ideasReducer from './ideasReducer';
import commentsReducer from './commentsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    ideas: ideasReducer,
    comments: commentsReducer
})

export default rootReducer;