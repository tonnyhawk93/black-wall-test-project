import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from '../api';

export const fetchData = createAsyncThunk(
  'exchanger/fetchData',
  async () => {
    const [directions, filters] = await Promise.all([API.getDirection(), API.getFilters()]);

    return [directions, filters];
  }
);

const initialState = {
  from: null,
  to: null,
  directions: {},
  currenciesFrom: [],
  currenciesTo: [],
}

const exchangerSlice = createSlice({
  name: 'exchanger',
  initialState,
  reducers: {
    setFrom: (state, action) => {
      const from = action.payload;
      state.from = from;
      state.currenciesTo = state.directions.find(direction => direction.from.code === from).to || [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        const [directions, filters] = action.payload;
        state.currenciesFrom = filters;
        state.currenciesTo = filters;
        state.directions = directions;
      })
  },
});

export const { setFrom } = exchangerSlice.actions;

export default exchangerSlice.reducer;