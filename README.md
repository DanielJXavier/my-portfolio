![](https://shields.io/badge/react-black?logo=react&style=for-the-badge)
![](https://shields.io/badge/next.js-black?logo=next.js&style=for-the-badge)
![](https://shields.io/badge/tailwindcss-black?logo=tailwindcss&style=for-the-badge)
![](https://shields.io/badge/typescript-black?logo=typescript&style=for-the-badge)
![](https://shields.io/badge/jest-black?logo=jest&style=for-the-badge)
![](https://shields.io/badge/testinglibrary-black?logo=testinglibrary&style=for-the-badge)
![](https://shields.io/badge/cypress-black?logo=cypress&style=for-the-badge)

# my-portfolio

This project was created to practice some development skills and also used as my professional portfolio.

## Quality gate

[![Quality gate status](https://sonarcloud.io/api/project_badges/measure?project=DanielJXavier_my-portfolio&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=DanielJXavier_my-portfolio)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=DanielJXavier_my-portfolio&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=DanielJXavier_my-portfolio)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=DanielJXavier_my-portfolio&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=DanielJXavier_my-portfolio)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=DanielJXavier_my-portfolio&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=DanielJXavier_my-portfolio)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=DanielJXavier_my-portfolio&metric=coverage)](https://sonarcloud.io/summary/new_code?id=DanielJXavier_my-portfolio)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=DanielJXavier_my-portfolio&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=DanielJXavier_my-portfolio)
[![Lines of code](https://sonarcloud.io/api/project_badges/measure?project=DanielJXavier_my-portfolio&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=DanielJXavier_my-portfolio)

## About the project

### Pages

All the pages were created following the LinkedIn profile structure to keep it simple to understand and easy to change when it is needed:

- [Homepage](https://www.danielxavier.dev/en)
  - This page has some introduction info:
    - Summary;
    - Some contact links;
    - My profile photo;
- [Experience](https://www.danielxavier.dev/en/experience)
  - This page has a timeline of all my professional positions;
  - The items are listed by default as a timeline showing:
    - Company logo;
    - Role name;
    - Company name;
    - Start and end dates;
  - It's possible to see a detailed version including:
    - A list of accomplishments;
    - Related skills and technologies;
- [Education](https://www.danielxavier.dev/en/education)
  - This page has a timeline of all my school and education history;
  - The items are listed as a list including:
    - School logo;
    - Field of study;
    - School name;
    - Start and end years;
    - Degree;
    - Subjects;
- [Skills](https://www.danielxavier.dev/en/skills)
  - This page has a list of my most relevant skills, displayed as a randomly ordered word cloud by default;
  - The skills can be filtered by all, hard, or soft skills, including:
    - Hard skills;
    - Soft skills;
  - The words have a size between 1 and 5 where:
    - 5 -> My major skills and my current focus;
    - ...
    - 1 -> The skills I learned but am not using or are not so relevant at the moment;
- [Recommendations](https://www.danielxavier.dev/en/recommendations)
  - This page has a list of the latest professional recommendations received from workmates;
  - The items are listed as quotes including:
    - Author's photo
    - Author's name;
    - Author's role;
    - Author's company;
    - Recommendation text;
- [Resume](https://www.danielxavier.dev/en/resume)
  - This page has a standard resume template designed for printing;
  - The resume includes:
    - Contact info;
    - Summary;
    - Skills;
    - Experience;
    - Education;
    - Languages;

### Responsive design

The design is responsive and has Cypress visual regression coverage for the screen resolutions listed below. The tests cover the homepage, education, experience, recommendations, and skills pages.

#### Desktop resolutions

1. 1920 x 1080
2. 1366 x 768
3. 1536 x 864
4. 1280 x 720
5. 1440 x 900

#### Mobile resolutions

1. 360 x 800
2. 390 x 844
3. 414 x 896
4. 375 x 667
5. 412 x 732

#### Tablet resolutions

1. 768 x 1024
2. 810 x 1080
3. 1280 x 800
4. 1024 x 768
5. 1920 x 1080

### Themes

The app is prepared to run in light mode and dark mode. To improve the user experience, the user's browser preference ([prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)) is retrieved and set to the application on the first visit.

There is also a button on the header to change the theme anytime. This choice will be persisted on the [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for future visits.

### Internationalization

The app was created with all texts in English but supports multiple languages. It's now already available in Portuguese as well.

The language was set depending on the user's browser language priority ([`Accept-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)) and persisted in the URL for the whole navigation.

There is a menu in the website footer with all available languages ​​that allow the user to change at any time.

### Performance

The app is optimized with Google's [Core Web Vitals](https://web.dev/articles/vitals) in mind. Performance can be measured with [PageSpeed Insights](https://pagespeed.web.dev/).

It uses [Vercel Speed Insights](https://vercel.com/docs/speed-insights) which provides a detailed view of the website's performance metrics and a near real-time Real Experience Score monitoring.

### Acessibility

This website is properly designed and coded following the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) best practices, so people with disabilities can use it. Making the web accessible benefits individuals, businesses, and society.

## Getting Started

Run `yarn install` to install the dependencies. The project uses Node.js 26.x and Yarn 4.19.0.

## Available scripts

### Development

`yarn dev` to run the server in development mode

`yarn lint` to run the static code analysis

`yarn typecheck` to generate Next.js route types and check TypeScript

### Tests

`yarn test` to run the unit tests

`yarn test:update` to run the unit tests and update the snapshots

`yarn test:coverage` to check the code coverage

`yarn cy:prepare` to run the server prepared for E2E tests

`yarn cy:open` to open Cypress interface

`yarn cy:run` to run the E2E tests

`yarn cy:update` to run the E2E tests and update the snapshots

### Production

`yarn build` to generate a production build

`yarn start` to run the server in production mode

## Tech Stack

- [React](https://github.com/facebook/react) to build the interfaces
- [Next.js](https://github.com/vercel/next.js) for the application framework and routing
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) to level up the CSS
- [TypeScript](https://github.com/microsoft/TypeScript) to level up the JavaScript
- [Jest](https://github.com/jestjs/jest) and [React Testing Library](https://github.com/testing-library/react-testing-library) to the unit tests
- [Cypress](https://github.com/cypress-io/cypress) to the E2E tests
- [Vercel](https://github.com/vercel/vercel) to the deployment

## Authors

- Daniel Xavier ([@DanielJXavier](https://github.com/DanielJXavier))
