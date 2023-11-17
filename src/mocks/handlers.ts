import { http, HttpResponse } from "msw";
import { emptyMock, moviesMock } from "../entities/movies/mocks/moviesMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/movies`, () => {
    return HttpResponse.json(moviesMock, { status: 200 });
  }),

  http.get(`${apiUrl}/movies/1`, () => {
    return HttpResponse.json(moviesMock[1], { status: 200 });
  }),
];

export const errorHandlers = [
  http.get(`${apiUrl}/movies`, () => {
    return HttpResponse.json(emptyMock, { status: 401 });
  }),

  http.get(`${apiUrl}/movies/1`, () => {
    return HttpResponse.json(emptyMock, { status: 401 });
  }),
];
