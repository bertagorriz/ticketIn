import { UiSliceStructure } from "../types";

export const showModalMock: UiSliceStructure = {
  isLoading: false,
  modalState: {
    isVisible: true,
    url: "",
  },
};

export const hideModalMock: UiSliceStructure = {
  isLoading: false,
  modalState: {
    isVisible: false,
    url: "",
  },
};

export const falseSkeletonState = {
  isLoading: false,
  modalState: { isVisible: false, url: "" },
};

export const trueSkeletonState = {
  isLoading: true,
  modalState: { isVisible: false, url: "" },
};
