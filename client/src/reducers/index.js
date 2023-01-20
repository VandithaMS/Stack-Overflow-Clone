import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionReducer from './question'
import usersReducer, {oneUserReducer} from "./users";
import planReducer from './plan';
import { Community, allPostReducer } from "./community";
import { OnePostReducer} from './OnePost'
import frndListReducer, {getReqReducer} from "./frnd";
import getNotificationReducer from "./notification";
import getLikeReducer from "./like";

export default combineReducers({
    authReducer, currentUserReducer,questionReducer, usersReducer, planReducer, Community, OnePostReducer, oneUserReducer, frndListReducer, getNotificationReducer, getReqReducer, getLikeReducer, allPostReducer
})