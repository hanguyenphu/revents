import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import {reducer as FormReducer} from "redux-form";


const rootReducers = combineReducers({
    form: FormReducer,
    test: testReducer,
    events:eventReducer
})

export default rootReducers;
