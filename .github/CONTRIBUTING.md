<p align="center">
  <a aria-label="Story of AMS logo" href="https://storyofams.com/" target="_blank" align="center">
    <img src="https://storyofams.com/blog/story-of-ams-logo-small@3x.png" alt="Story of AMS" width="120">
  </a>
  <h1 align="center">Contributing</h1>
</p>

## Components

1. If it has complex functionality add a test file
2. Write one or more stories
3. We use Rebass components (<https://rebassjs.org/>). Most of the Rebass components have been extended and can be found in the `src/components/common` folder. Make sure to import Box, Flex, Text, Heading and Label from `rebass/styled-components`
4. Have fun building :)

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

Don't test implementation details! Just test your component like you would use it in real life.

The closer your tests resemble the way they are being used the more confidence they can give you.

Testing examples for pretty much every use case are [here](https://github.com/kentcdodds/react-testing-library-course)

## Commit messages

Uses [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) and husky to enforce them.

In short commit messages should look like:

```bash
<type>[optional scope]: <description>
```

Examples:

```bash
feat(box): added border prop for styled-system
fix: fixed crashing issue on IE
refactor(landing page): moved data fetching to swr
```

Possible types: `fix`,`feat`,`refactor`,`docs`,`ci`,`test`,`chore`
