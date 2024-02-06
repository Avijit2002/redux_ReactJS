
import { applyMiddleware, combineReducers, createStore } from "redux";
import accountreducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
    account : accountreducer,
    customer : customerReducer
  })
  
  const store = createStore(rootReducer,applyMiddleware(thunk));

  export default store