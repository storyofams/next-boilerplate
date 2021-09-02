<div align="center">
  <p align="center">
    <a aria-label="Story of AMS logo" href="https://storyofams.com/" target="_blank" align="center">
      <img src="https://avatars.githubusercontent.com/u/19343504" alt="Story of AMS" width="100">
    </a>
    <h1 align="center">next-boilerplate</h1>
  </p>
  <p align="center">
    <a aria-label="Releases" href="https://GitHub.com/storyofams/next-boilerplate/releases/">
      <img src="https://img.shields.io/github/release/storyofams/next-boilerplate.svg" />
    </a>
    <a aria-label="Codesandbox" href="https://githubbox.com/storyofams/next-boilerplate">
      <img src="https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox" />
    </a>
    <a aria-label="Stars" href="https://github.com/storyofams/next-boilerplate/stargazers/">
      <img src="https://img.shields.io/github/stars/storyofams/next-boilerplate.svg?style=social&label=Star&maxAge=86400" />
    </a>
  </p>
</div>

---

<div align="center">
  Boilerplate to enable teams to build production grade, highly scalable and flexible react applications with Next.js
</div>

---

# What's included? ([preview deployment](https://next-boilerplate-storyofams.vercel.app/))

| Name                                                                                                   | description                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@storyofams/next-api-decorators](https://github.com/storyofams/next-api-decorators)                   | Collection of decorators to create typed Next.js API routes, with easy request validation and transformation. [View docs](https://next-api-decorators.vercel.app/)                                                           |
| [@storyofams/react-ui](https://github.com/storyofams/react-ui)                                         | Collection of UI components build to create a production grade front-end experience. [View components](https://react-ui-git-dev-storyofams.vercel.app/)                                                                      |
| [cypress](https://www.cypress.io/)                                                                     | [cypress-testing-library](https://testing-library.com/docs/cypress-testing-library/intro/) implemented throughout. Be sure to have a look at [their docs](https://testing-library.com/docs/cypress-testing-library/intro/)   |
| [date-fns](https://date-fns.org/)                                                                      | Enabling data manipulation in a comprehensive, yet humanly understandable fashion                                                                                                                                            |
| [eslint](https://github.com/eslint/eslint)                                                             | Ensures best practices are top of mind. Uses [@storyofams/eslint-config-ams](https://github.com/storyofams/eslint-config-ams) to get up and running quickly.                                                                 |
| [husky](https://github.com/typicode/husky)                                                             | Used to trigger specific actions on commit (linting files and commit messages)                                                                                                                                               |
| [jest](https://jestjs.io/)                                                                             | [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) implemented throughout. Be sure to have a look at [their docs](https://testing-library.com/docs/react-testing-library/example-intro/) |
| [sentry](https://sentry.io/welcome/)                                                                   | Integration to toggle the sentry implementation on or off without the hassle                                                                                                                                                 |
| [sitemap-handler](https://github.com/storyofams/next-boilerplate/blob/master/src/pages/api/sitemap.ts) | Simple implementation for xml-sitemap creation.                                                                                                                                                                              |
| [storybook](https://storybook.js.org/)                                                                 | Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.                                                                               |
| [SWR](https://swr.vercel.app/)                                                                         | For all your data-handling needs (might get replaced by react-query in the near future)                                                                                                                                      |
| [typescript](https://www.typescriptlang.org/docs/)                                                     | Because building a javascript in this day and age git just doesn't feel right without it                                                                                                                                     |

## Getting started
*While we are working on a fancy generator* to get the generics bits inserted for you, the easiest thing to do is to **clone the repo**.

Replace the theme file with your own and go through the files and folders to replace "Story of AMS" references with your own.

### Theme

Basic theming is located in `src/styles/theme` folder.

For more information on theming and styling see [@storyofams/react-ui](https://github.com/storyofams/react-ui).

## File structure

```md
 - src
  - components
    - home // components specific to the home page
    - common // for all shared components
      - List
        - list.test.tsx
        - list.stories.tsx
        - index.tsx // actual component lives here
  - config // constants & env variable export
  - hooks // custom hooks
  - lib // utils, helpers, etc
  - pages
  - styles // theme folder location (& css-reset + typesript)
```

## SEO

Uses [next-seo](https://github.com/garmeeh/next-seo).

Utilizes a default config to get up and running quickly (see `src/config`).
Always include a `<NextSeo />` tag with minimal information included on page level.

## Sentry

This project comes out of the box with a sample implementation of [Sentry](https://sentry.io/welcome/) (including sourcemaps).

You can enable the implementation by setting the keys you've generated as environment variables in your application.

To get it fully operational requires:

- generating keys in sentry
- setting up environment variables

The following keys are needed for the sample implementation:

```md
- NEXT_IS_SERVER
- NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR (Used to improve readability of the framepaths in the sourcemaps)
- NODE_ENV (Sentry is only enabled when the `NODE_ENV` is production)
- NEXT_PUBLIC_SENTRY_DSN (The DSN tells the SDK where to send the events)
- NEXT_PUBLIC_COMMIT_SHA (Sets the release)
```

To be able to upload the sourcemaps, you will need to add the following keys

```md
- SENTRY_ORG
- SENTRY_PROJECT
- SENTRY_AUTH_TOKEN
```

When all the Sentry configuration env variables are set, the Sentry webpack plugin gets pushed to the webpack plugins, to build and upload the source maps to sentry.

This is an alternative to manually uploading the source maps and is disabled in development mode.

## Missing something?

[Open an issue](https://github.com/storyofams/next-boilerplate/issues/new/choose) with your proposed change.

## Wanna help out?

See [contributing.md](https://github.com/storyofams/next-boilerplate/blob/master/.github/CONTRIBUTING.md) to see how you can get started.
