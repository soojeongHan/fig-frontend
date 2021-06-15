import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DummyData, { imageList } from "./DummyData";

const name = "partners";

export const fetchData = createAsyncThunk(`${name}/fetchData`, async () => {
  try {
    const response = await new Promise((res, _) => {
      setTimeout(() => {
        res(DummyData);
      }, 250);
    });
    return response;
  } catch (e) {
    throw new Error(e);
  }
});

export const fetchDataImage = createAsyncThunk(
  `${name}/fetchDataImage`,
  async (image) => {
    try {
      const response = await new Promise((res, _) => {
        setTimeout(() => {
          const data = imageList[image];
          res({
            name: image,
            data,
          });
        }, 250);
      });
      return response;
    } catch (e) {
      throw new Error(e);
    }
  }
);

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
    [fetchDataImage.fulfilled.type]: (state, action) => {
      state.data.map((v) =>
        v.image === action.payload.name
          ? Object.assign(v, { src: action.payload.data })
          : v
      );
    },
  },
});

export default slice;
