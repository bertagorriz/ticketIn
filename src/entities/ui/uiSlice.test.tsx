import {
  hideSkeletonActionCreator,
  showSkeletonActionCreator,
  uiReducer,
} from "./uiSlice";

const falseSkeletonState = { isLoading: false };
const trueSkeletonState = {
  isLoading: true,
};

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
