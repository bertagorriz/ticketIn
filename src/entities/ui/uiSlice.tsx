import { createSlice } from "@reduxjs/toolkit";
import { UiSliceStructure } from "./types";

const uiState: UiSliceStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    showSkeleton: (currentState: UiSliceStructure) => ({
      ...currentState,
      isLoading: true,
    }),
    hideSkeleton: (currentState: UiSliceStructure) => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const {
  showSkeleton: showSkeletonActionCreator,
  hideSkeleton: hideSkeletonActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
