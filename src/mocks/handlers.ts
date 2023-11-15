import { http, HttpResponse } from "msw";
import { emptyMock, moviesMock } from "./moviesMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/movies`, () => {
    return HttpResponse.json(moviesMock, { status: 200 });
  }),
];

export const errorHandlers = [
  http.get(`${apiUrl}/movies`, () => {
    return HttpResponse.json(emptyMock, { status: 401 });
  }),
];
