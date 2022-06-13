import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CountryLeague } from "../type";
import { RootState } from "./index";
import useHttp from "../hooks/use-http";

export interface CountriesState {
  countries: Array<CountryLeague>;
  status: string;
  currentPage: number;
}

const initialState: CountriesState = {
  countries: [],
  status: "idle",
  currentPage: 0,
};

export const getCountriesAsync = createAsyncThunk(
  "get/allcountries",
  async () => {
    const { getCountries } = useHttp();

    const response = await getCountries();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const CountriesSlice = createSlice({
  name: "countriesleagues",
  initialState,
  reducers: {
    getCountriesLeague: (
      state,
      action: PayloadAction<Array<CountryLeague>>
    ) => {
      state.countries = action.payload;
    },
    insertCountry: (state, action: PayloadAction<Array<CountryLeague>>) => {
      state.countries = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCountriesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const allCountries = action.payload.map((e) => {
          return { id: e.id, flag: e.flag, name: e.name, code: e.code };
        });
        state.countries = allCountries;
      })
      .addCase(getCountriesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectAllCountries = (state: RootState) => state.countries.countries;
export const getAllCountriesStatus = (state: RootState) => state.countries.status;
export const getCurrentPage = (state: RootState) => state.countries.currentPage;
export const { getCountriesLeague, setCurrentPage } = CountriesSlice.actions;
