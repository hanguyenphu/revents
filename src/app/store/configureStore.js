import { createStore } from "redux";
import rootReducers from '../reducers/rootReducers';

export const configureStore = () => {
    const store = createStore(rootReducers);

    return store;
}