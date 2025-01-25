import { configureStore } from "@reduxjs/toolkit";
import numbersReducer from '../slices/numbersSlicers';
import  userReducer  from "../slices/userSlicers";
import  fruitReducer from "../slices/fruitSlicer";

const store =configureStore(
    {reducer:{userInfo:userReducer,fruitInfo:fruitReducer,numbersInfo: numbersReducer}
}
)
export default store


// store is used to manage a global state
//configureStore: A function from Redux Toolkit that simplifies 
// the creation of the Redux store.