## TicketIn

Ticket-In is a **Single Page Application** developed with **React** and **Redux** that enables users to purchase tickets for watching a movie at the cinema

The initial step involved designing the page in **Figma** to outline all interface styles. These styles were later applied using **StyledComponents** in each of the created components, always with a strong focus on **accessibility** for all users. This involved ensuring suitable color contrast, adding alternative text to images, and incorporating aria-label tags where necessary.

Throughout the application development process, version control was managed via **GIT**, following a **CI/CD** workflow in the pipeline, such as trunk-based development. This included overseeing all the code committed to the main branch using \*_Husky hooks_, among other practices.

To maintain code quality, tools like **Eslint** and **Prettier** were utilized. **Lighthouse** was employed to monitor accessibility, best practices, SEO, and performance aspects.

## Metrics

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=bertagorriz_ticketIn)](https://sonarcloud.io/summary/new_code?id=bertagorriz_ticketIn)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=bertagorriz_ticketIn&metric=coverage)](https://sonarcloud.io/summary/new_code?id=bertagorriz_ticketIn)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=bertagorriz_ticketIn&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=bertagorriz_ticketIn)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=bertagorriz_ticketIn&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=bertagorriz_ticketIn)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=bertagorriz_ticketIn&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=bertagorriz_ticketIn)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=bertagorriz_ticketIn&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=bertagorriz_ticketIn)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=bertagorriz_ticketIn&metric=bugs)](https://sonarcloud.io/summary/new_code?id=bertagorriz_ticketIn)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=bertagorriz_ticketIn&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=bertagorriz_ticketIn)

## Features

- Browse the list of movies currently showing.
- Detailed information for each movie, including session schedules
- Seats page with information on available seats for reservation

## Upcoming Implementations

- Ticket generation upon reservation confirmation.

## Demo

Currently, there is a demo hosted at the following link: https://ticketin.netlify.app/

## Technologies Used

- **TypeScript**: programming language that extends JavaScript by adding static types.

- **React**: open-source JavaScript library for building user interfaces.

- **Redux**: JavaScript library for state management in applications.

- **React Router**: library that enables navigation between different views in a React application.

- **Axios**: promise-based HTTP client for making requests to a server.

- **React Testing Library**: testing utility for React applications that allows unit and integration testing.

- **Vite**: fast build tool for modern web applications.

- **Vitest**: set of testing utilities for Vite applications.

- **Jest**: JavaScript testing framework with a focus on simplicity and ease of use.

- **MSW**: testing library enabling the interception and simulation of network requests in web applications for integration and unit testing. This helps simulate responses and conduct tests without relying on a live server.

- **Styled Components**: library that allows writing CSS styles in React components.

## Additional Tools

- **ESLint**: static code analysis tool to identify and report problematic patterns in JavaScript code.

- **Git Hooks Workflows**: development strategy based on working directly on the main branch (trunk) and using Git hooks for quality control and code reviews.

- **Prettier**: code formatting tool that helps maintain consistent code style in the project.

- **SonarCloud**: analysis service that provides continuous inspection and analysis of code quality, security vulnerabilities, and overall maintainability of projects. It helps to identify bugs, code smells, security vulnerabilities, and other code issues by automatically analyzing code on every commit or pull request, offering detailed reports, and providing insights for improvements.

- **Netlify**: web hosting and infrastructure services platform offering comprehensive tools for web development, deployment, and management.

- **Postman**: tool that simplifies the development of APIs, enabling developers to design, test, and document APIs.

- **Figma**: cloud-based design and prototyping tool used for interface design, prototyping, collaboration, and design systems. The project's Figma can be accessed here: https://www.figma.com/file/IqOXxKz6E1FcYCtAumMs80/TicketIn?type=design&node-id=36-229&mode=design&t=GzKv6RpXryI0SGPl-0

- **Trello**: web-based project management application that allows users to create boards, lists, and cards to organize tasks and projects in a visual and flexible way. The project's Trello can be accessed here: https://trello.com/b/YP78FHzk/ticket-in

## Setup

1. Clone this repository and install its dependencies using the command `npm i`

2. Will be necessary to create a .env file at the root of the project to host the following environment variable: VITE_API_URL=https://ticketin-api.onrender.com

3. Start a developmet server using the command `npm run dev`

4. Navigate to the appropriate link of your localhost

## Available cripts

`npm run dev`: starts a development server

`npm run build`: builds the app

`npm run preview`: runs the built app

`npm run lint`: runs ESLint

`npm run test`: runs the unit test for the application

`npm run test:coverage`: shows application's test coverage

## Authors

- [@bertagorriz](https://github.com/bertagorriz)
- [@jvivesramon](https://github.com/jvivesramon)
- [@caminolosada](https://github.com/caminolosada)
- [@DiegoCallegari](https://github.com/DiegoCallegari)
