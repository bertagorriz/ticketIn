import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalStateStructure, UiSliceStructure } from "./types";

const uiState: UiSliceStructure = {
  isLoading: false,
  modalState: {
    isVisible: false,
    url: "",
  },
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
    showModal: (
      currentState: UiSliceStructure,
      action: PayloadAction<ModalStateStructure>,
    ) => ({
      ...currentState,
      modalState: {
        ...action.payload,
      },
    }),
    hideModal: (currentState: UiSliceStructure) => ({
      ...currentState,
      modalState: { ...uiState.modalState },
    }),
  },
});

export const {
  showSkeleton: showSkeletonActionCreator,
  hideSkeleton: hideSkeletonActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
