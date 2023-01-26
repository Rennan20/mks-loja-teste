import { legacy_createStore as createStore, Store } from "redux";

import { State } from "./state";
import { reducer } from "./reducer";

export const store: Store<State> = createStore(reducer);
