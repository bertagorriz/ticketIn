import { MovieStructure } from "../../entities/movies/types";

export const moviesMock: MovieStructure[] = [
  {
    id: 1,
    title: "Barbie",
    director: "Greta Gerwig",
    posterUrl: [
      "https://i.ibb.co/FDRMDLQ/barbie-big.webp",
      "https://i.ibb.co/7yVqxsV/barbie-small.webp",
    ],
    synopsis:
      "A doll living in 'Barbieland' is expelled for not being perfect enough and sets off on an adventure in the real world. A Live-action feature film based on the popular line of Barbie toys.",
    runtime: "1h 54min",
    genre: "Adventure, Comedy",
  },
  {
    id: 2,
    title: "Inception",
    director: "Christopher Nolan",
    posterUrl: [
      "https://i.ibb.co/F0NxYqJ/inception-big.webp",
      "https://i.ibb.co/h7r4vq3/inception-small.webp",
    ],
    synopsis:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    runtime: "2h 28min",
    genre: "Action, Adventure, Sci-Fi",
  },
];

export const emptyMock: MovieStructure[] = [];
