import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "@/store/rootReducer";
import rootSaga from "@/store/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;