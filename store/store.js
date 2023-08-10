import {createStore, compose} from "redux";
import rootReducer from "@/store/rootReducer";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers()
);

const store = configureStore({});

export default store;