import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "@/store/rootReducer";
import rootSaga from "@/store/rootSaga";
import {createWrapper} from "next-redux-wrapper";

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = applyMiddleware(sagaMiddleware);

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
    //composeEnhancers
);

store.sagaTask = sagaMiddleware.run(rootSaga);

//const store = configureStore({});

// sagaMiddleware.run(rootSaga);


// const makeStore = () => store;

function makeStore () {
    return store;
}

export const wrapper = createWrapper(makeStore);

export default store;