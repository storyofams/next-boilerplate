<p align="center">
  <a href="https://storyofams.com/" target="_blank" align="center">
    <img src="https://storyofams.com/blog/story-of-ams-logo-small@3x.png" alt="Story of AMS" width="120">
  </a>
  <h1 align="center">next-boilerplate</h1>
</p>

<p align="center">
  <a href="https://GitHub.com/storyofams/next-boilerplate/releases/">
    <img src="https://img.shields.io/github/release/storyofams/next-boilerplate.svg" />
  </a>
  <a href="https://githubbox.com/storyofams/next-boilerplate">
    <img src="https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox" />
  </a>
  <a href="https://github.com/storyofams/next-boilerplate/stargazers/">
    <img src="https://img.shields.io/github/stars/storyofams/next-boilerplate.svg?style=social&label=Star&maxAge=2592000" />
  </a>
</p>

## Components

1. If it has complex functionality add a test file
2. Write one or more stories
3. We use Rebass components (<https://rebassjs.org/>). Most of the Rebass components have been extended and can be found in the `src/components/common` folder. Make sure to import Box, Flex, Text, Heading and Label from `rebass/styled-components`
4. Have fun building :)

## Theme

Basic theming is located in `src/styles/theme` folder. It also includes themed Rebass components (<https://rebassjs.org/theming>). Theme well at the start of the project and then you can forget about it.

## Variants

Sometimes its good to have multiple variations (or `variants`) of a single component. In this case use the `variant` prop: <https://rebassjs.org/variants>. Put the variant in the component folder/file or in `src/styles/theme/variants.ts`, that's under your discretion.

## The CSS function

Sometimes you need to only add props from the theme, in those cases its often easier to use the `css` utility:

```
import styled from 'styled-components'
import css from '@styled-system/css'

const Button = styled.button(css({
  color: 'grey400',
  borderRadius: 'sm',
  p: [1,2,3], // can take responsive arrays just like styled-system
  d: 'inline-flex'
}))
```

This will automatically create a styled component that takes its properties from the theme.

## Ease of use

I have hidden a bunch of files to make the whole thing easier to understand. If you need to tweak them you can unhide them from the `.vscode` folder.

## File structure

```
|- src
|- components
  |- common // for all reused components
    |- Box
      |- components
        |- MySubcomponent.tsx  // if your component file grows too large you can put subcomponents in here. This includes styles (styled components).
      |- box.test.tsx
      |- box.stories.tsx
      |- Box.tsx // actual component lives here
      |- index.ts // exports the component, types and everything else
  |- landing // components specific to the landing page
|- lib // utils, yup schemas etc
|- pages
|- styles
|- hooks // reusable hooks and context
```

## Whats included?

- Project structure with eslint, prettier, husky, alias, storybook, sentry, fontfaceobserver and all other bells and whistles
- A bunch of base components that make it easy to get going
- A theme file and css normalizer
- A bunch of hooks and utils

## Testing

#### Why tests?

- Less bugs
- Higher quality software in less time
- Automatic documentation
- Tdd leads to better workflow
- Writing tests takes very little time

#### What to test

> Write tests. Not too many. Mostly integration.
> [https://kentcdodds.com/blog/write-tests](start here if you don't know what to test)

- **Don't test implementation details**
- Just test your component like you would use it in real life.

> The closer your tests resemble the way they are being used the more confidence they can give you

Bad test:

> Test if button with the text "edit" sets isOpen to true
> -> isOpen could be renamed and the test would fail for no reason
> -> "edit" could be changed to "Edit" and the test would fail for no reason

Good test:

> Test if item with data-testid='modal' is in the dom after data-testid='edit-btn' was clicked

**You can find a simple test example in the radio component.**

Testing examples for pretty much every use case are [here](https://github.com/kentcdodds/react-testing-library-course)

## Commit messages

Uses [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) and husky to enforce them.

In short commit messages should look like:

```
<type>[optional scope]: <description>
```

Examples:

```
feat(box): added border prop for styled-system
fix: fixed crashing issue on IE
refactor(landing page): moved data fetching to swr
```

Possible types: `fix`,`feat`,`refactor`,`docs`,`test`,`chore`

## SEO

Uses [next-seo](https://github.com/garmeeh/next-seo)

## Crash feedback

This project comes out of the box with a sample implementation of [Sentry](https://sentry.io/welcome/) including sourcemaps. When all the Sentry configuration env variables are available/configured,
the Sentry webpack plugin gets pushed to the webpack plugins, to build and upload the source maps to sentry.
This is an alternative to manually uploading the source maps and is disabled in development mode.

To get it fully operational requires:

- generating keys in sentry
- setting up environment variables

The following are needed for the sample implementation:

- NEXT_IS_SERVER
- NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR
  Used to improve readability of the framepaths in the sourcemaps
- NODE_ENV
  Sentry is only enabled when the `NODE_ENV` is production
- NEXT_PUBLIC_SENTRY_DSN
  The DSN tells the SDK where to send the events.
- NEXT_PUBLIC_COMMIT_SHA
  Sets the release.

To be able to upload the sourcemaps, you will need to add the following keys

- SENTRY_ORG
- SENTRY_PROJECT
- SENTRY_AUTH_TOKEN

## Missing something?

Open an issue on the repo with your proposed change.

## Roadmap

- [ ] Authentication wrapper
- [ ] Circular dependencies handler
- [ ] Extract All components into styleable base components (aka ACL reborn)
- [ ] Make a helper for omiting all the conflicting props from default html types
