import { configureStore } from "@reduxjs/toolkit";

import exchangerSlice from './exchangerSlice'

const store = configureStore({
  reducer: {
    exchanger: exchangerSlice,
  },
})

export default store;