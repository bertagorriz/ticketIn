import { http, HttpResponse } from "msw";
import {
  emptyMovieMock,
  moviesMock,
} from "../entities/movies/mocks/moviesMock";
import path from "../routers/paths/paths";
import {
  emptySessionsMock,
  sessionsMock,
} from "../entities/sessions/mocks/sessionsMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}${path.movies}`, () => {
    return HttpResponse.json(moviesMock, { status: 200 });
  }),

  http.get(`${apiUrl}${path.movies}/1`, () => {
    return HttpResponse.json(moviesMock[1], { status: 200 });
  }),

  http.get(`${apiUrl}/sessions`, () => {
    return HttpResponse.json(sessionsMock, { status: 200 });
  }),
];

export const errorHandlers = [
  http.get(`${apiUrl}${path.movies}`, () => {
    return HttpResponse.json(emptyMovieMock, { status: 401 });
  }),

  http.get(`${apiUrl}${path.movies}/1`, () => {
    return HttpResponse.json(emptyMovieMock, { status: 401 });
  }),

  http.get(`${apiUrl}/sessions`, () => {
    return HttpResponse.json(emptySessionsMock, { status: 401 });
  }),
];
