![](https://shields.io/badge/react-black?logo=react&style=for-the-badge)
![](https://shields.io/badge/next.js-black?logo=next.js&style=for-the-badge)
![](https://shields.io/badge/tailwindcss-black?logo=tailwindcss&style=for-the-badge)
![](https://shields.io/badge/typescript-black?logo=typescript&style=for-the-badge)
![](https://shields.io/badge/jest-black?logo=jest&style=for-the-badge)
![](https://shields.io/badge/testinglibrary-black?logo=testinglibrary&style=for-the-badge)
![](https://shields.io/badge/cypress-black?logo=cypress&style=for-the-badge)
![](https://shields.io/badge/vercel-black?logo=vercel&style=for-the-badge)

# my-portfolio

This is a project created to practice some development skills and also used as my professional portfolio.

## About the project

### Pages

All the pages were created following the LinkedIn profile structure to keep it simple to understand and easy to change when it is needed:

- [Home](https://www.danielxavier.dev/en)
  - This page has some introduction info:
    - Summary;
    - Some contact links;
    - My profile photo;
- [Experience](https://www.danielxavier.dev/en/experience)
  - This page has a timeline of all my professional positions;
  - The items are listed by default as a simple list only showing:
    - Role name;
    - Company name;
    - Start and end years;
    - A short description about the role;
  - It's possible to see a detailed version incluind:
    - A list of the main responsibilities;
    - The biggest challenge faced;
- [Education](https://www.danielxavier.dev/en/education)
  - This page has a timeline of all my school and education hsitory;
  - The items are listed as a list including:
    - Field of study;
    - School name;
    - Start and end years;
    - Degree;
    - Subjects;
- [Skills](https://www.danielxavier.dev/en/skills)
  - This page has a list my most relevant skills;
  - The items are listed by default as a random sorted Word Cloud including:
    - Hard skills;
    - Soft skills;
  - The words have a size between 1 and 5 where:
    - 5 -> My major skills and my current focus;
    - ...
    - 1 -> The skills that I've learned but I don't using or it's not so relevant for now;
- [Recommendations](https://www.danielxavier.dev/en/recommendations)
  - This page has a list of the latest professional recommendations received from workmates;
  - The items are listed as quotes including:
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

### Responsive design

The design is fully responsive and was validated for the most [common screen resolutions](https://testsigma.com/blog/common-screen-resolutions/) of each platform (desktop, mobile, and tablet).

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

All pages were highly optimized following the Google [Core Web Vitals](https://web.dev/articles/vitals) guidelines and validated in [PageSpeed Insights](https://pagespeed.web.dev/) achieving a score of 100 in all evaluations.

It uses [Vercel Speed Insights](https://vercel.com/docs/speed-insights) which provides a detailed view of the website's performance metrics and a near real-time Real Experience Score monitoring.

### Acessibility

This website is properly designed and coded following the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) best practices, so people with disabilities can use it. Making the web accessible benefits individuals, businesses, and society.

## Getting Started

`yarn install` to install the dependencies

## Available scripts

### Development

`yarn dev` to run the server in development mode

`yarn lint` to run the static code analysis

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
- [Next.js](https://github.com/vercel/next.js) to improve the performance
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) to level up the CSS
- [TypeScript](https://github.com/microsoft/TypeScript) to level up the JavaScript
- [Jest](https://github.com/jestjs/jest) and [React Testing Library](https://github.com/testing-library/react-testing-library) to the unit tests
- [Cypress](https://github.com/cypress-io/cypress) to the E2E tests
- [Vercel](https://github.com/vercel/vercel) to the deployment

## Authors

- Daniel Xavier ([@DanielJXavier](https://github.com/DanielJXavier))
