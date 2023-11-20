import { useCallback } from "react";
import axios from "axios";
import { useAppDispatch } from "../../../../store";
import {
  hideSkeletonActionCreator,
  showSkeletonActionCreator,
} from "../../../ui/uiSlice";
import showToast from "../../../../Toast/showToast";
import { SessionsStructure } from "../../types";

const apiUrl = import.meta.env.VITE_API_URL;

const useSessions = () => {
  const dispatch = useAppDispatch();

  const getSessions = useCallback(async (): Promise<SessionsStructure[]> => {
    try {
      dispatch(showSkeletonActionCreator());
      const { data: sessions } = await axios.get<SessionsStructure[]>(
        `${apiUrl}/sessions`,
      );
      dispatch(hideSkeletonActionCreator());
      return sessions;
    } catch {
      dispatch(hideSkeletonActionCreator());

      const error = "Sorry, can't load sessions information now";
      showToast(error, "error");
      throw error;
    }
  }, [dispatch]);
  return { getSessions };
};

export default useSessions;
