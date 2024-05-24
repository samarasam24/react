import { legacy_createStore as createStore } from "redux";
import { CrudReducer } from "../reducer/CrudReducer";


export const store = createStore(CrudReducer);