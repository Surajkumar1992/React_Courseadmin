import { combineReducers } from "redux";
import courses from './courseReducer';

function rootReducer() { 
    combineReducers({ 
        courses
     })
}

export default rootReducer;