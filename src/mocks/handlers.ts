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
import { emptySeatsMock, seatsMock } from "../entities/seats/mocks/seatsMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}${path.movies}`, () => {
    return HttpResponse.json(moviesMock, { status: 200 });
  }),

  http.get(`${apiUrl}${path.movies}/1`, () => {
    return HttpResponse.json(moviesMock[1], { status: 200 });
  }),

  http.get(`${apiUrl}${path.sessions}/1`, () => {
    return HttpResponse.json(sessionsMock[0], { status: 200 });
  }),

  http.get(`${apiUrl}${path.seats}`, ({ request }) => {
    const url = new URL(request.url);

    url.searchParams.set("movieId", seatsMock.movieId.toString());
    url.searchParams.set("sessionId", seatsMock.sessionId.toString());

    return HttpResponse.json([seatsMock], { status: 200 });
  }),
];

export const errorHandlers = [
  http.get(`${apiUrl}${path.movies}`, () => {
    return HttpResponse.json(emptyMovieMock, { status: 401 });
  }),

  http.get(`${apiUrl}${path.movies}/1`, () => {
    return HttpResponse.json(emptyMovieMock, { status: 401 });
  }),

  http.get(`${apiUrl}${path.sessions}/1`, () => {
    return HttpResponse.json(emptySessionsMock, { status: 401 });
  }),

  http.get(`${apiUrl}${path.seats}`, ({ request }) => {
    const url = new URL(request.url);

    url.searchParams.set("movieId", seatsMock.movieId.toString());
    url.searchParams.set("sessionId", seatsMock.sessionId.toString());

    return HttpResponse.json([emptySeatsMock], { status: 401 });
  }),
];
