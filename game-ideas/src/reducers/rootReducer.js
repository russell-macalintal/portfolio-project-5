import { combineReducers } from 'redux';
import ideasReducer from './ideasReducer';
import commentsReducer from './commentsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    ideas: ideasReducer,
    comments: commentsReducer
})

export default rootReducer;