import { configureStore } from "@reduxjs/toolkit";
// import { createLogger as logger } from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleWare) =>
    //     getDefaultMiddleWare().concat(logger)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
