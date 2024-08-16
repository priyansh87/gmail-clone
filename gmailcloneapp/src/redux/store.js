import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./appSlice";


const store = configureStore({
    reducer:{
        appSlice : appReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Disable serializable check
      }),
})


export default store ;