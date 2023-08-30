import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getirData = createAsyncThunk(
  "haberSlice/getirData",

  async () => {
    const data = await axios(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
    );
    //  console.log(data);
    return data.data.articles;
  }
);

export const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    haberler: [],
    loading: true,
  },
  reducers: {
    temizle:(state)=>{
        state.haberler=[]
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getirData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getirData.fulfilled, (state, action) => {
        // console.log(action);
        state.haberler = action.payload;
        state.loading = false;
      });
  },
});

export const { temizle } = haberSlice.actions;

export default haberSlice.reducer;
