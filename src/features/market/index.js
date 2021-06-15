import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const name = "market";

const initialState = {
  loading: false,
  error: false,
  success: false,
};

const reducers = {
  loading: (state) => {
    state.loading = true;
  },
  fail: (state, action) => {
    state.error = action.payload;
  },
};

export const fetchData = createAsyncThunk(
  `${name}/fetchData`,
  async ({ error, time }) => {
    try {
      const response = await new Promise((res, rej) => {
        const asyncTime = error ? time - 1700 : time; // error 발생 시 2s, 정상 처리 3.7s
        setTimeout(() => {
          !error ? res(true) : rej(new Error());
        }, asyncTime);
      });
      return response;
    } catch (e) {
      throw new Error(e);
    }
  }
);

const slice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers: {
    [fetchData.pending.type]: (state) => {
      state.error = false;
      state.loading = true;
    },
    [fetchData.fulfilled.type]: (state) => {
      state.error = false;
      state.loading = false;
      state.success = true;
    },
    [fetchData.rejected.type]: (state) => {
      state.loading = false;
      state.success = false;
      state.error = true;
    },
  },
});

export default slice;
