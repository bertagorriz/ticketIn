import {
  falseSkeletonState,
  hideModalMock,
  showModalMock,
  trueSkeletonState,
} from "./mocks/uiMocks";
import {
  hideModalActionCreator,
  hideSkeletonActionCreator,
  showModalActionCreator,
  showSkeletonActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showSkeleton reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the new loading state set to true", () => {
      const newExpectedLoadingState = uiReducer(
        falseSkeletonState,
        showSkeletonActionCreator(),
      );

      expect(newExpectedLoadingState).toStrictEqual(trueSkeletonState);
    });
  });
});

describe("Given a hideSkeleton reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the new loading state set to false", () => {
      const newExpectedLoadingState = uiReducer(
        trueSkeletonState,
        hideSkeletonActionCreator(),
      );

      expect(newExpectedLoadingState).toStrictEqual(falseSkeletonState);
    });
  });
});

describe("Given a showModal reducer", () => {
  describe("When it is called", () => {
    test("Then it should return a new modalState with isVisible set to true", () => {
      const newExpectedModalState = uiReducer(
        hideModalMock,
        showModalActionCreator({
          isVisible: true,
          url: "",
        }),
      );
      expect(newExpectedModalState).toStrictEqual(showModalMock);
    });
  });
});

describe("Given a hideModal reducer", () => {
  describe("When it is called", () => {
    test("Then it should return a new modalState with isVisible set to false", () => {
      const newExpectedModalState = uiReducer(
        showModalMock,
        hideModalActionCreator(),
      );

      expect(newExpectedModalState).toStrictEqual(hideModalMock);
    });
  });
});
