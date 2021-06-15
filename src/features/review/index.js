import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DummyData from "./DummyData";

const name = "review";

export const fetchData = createAsyncThunk(`${name}/fetchData`, async () => {
  try {
    const response = await new Promise((res, _) => {
      setTimeout(() => {
        res(DummyData);
      }, 500);
    });
    return response;
  } catch (e) {
    throw new Error(e);
  }
});

const initialState = {
  data: [],
};

const reducers = {};

const slice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers: {
    [fetchData.fulfilled.type]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default slice;
