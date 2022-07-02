import { legacy_createStore } from "redux";

import reducer from "./reducers/index";

export default function configureStore(initialState) {
    return legacy_createStore(reducer, initialState);
}