<p align="center">
  <a aria-label="Story of AMS logo" href="https://storyofams.com/" target="_blank" align="center">
    <img src="https://storyofams.com/public/story-of-ams-logo-small@3x.png" alt="Story of AMS" width="120">
  </a>
  <h1 align="center">Contributing</h1>
</p>

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

### CLI

The project is setup to enforce conventional commits, this can be daunting if this is the first time hearing about them. Luckily all of our projects come with a customized CLI to help you draft up conventional commits (emoji's included) 🤩

So if you want to stay true to the conventional commit guidelines, please try out `yarn commit`. A prompt will lead you through setting up the commit (don't forget `git add` before running the command 😉).

## Testing

Always make sure to add or update test(s) when adding or altering functionality. Doing this will ensure that the code keeps working the way it is intended to work.

### Why tests?

- Less bugs
- Higher quality software in less time
- Automatic documentation
- Tdd leads to better workflow
- Writing tests takes very little time

#### What to test

[start here if you don't know what to test](https://kentcdodds.com/blog/write-tests)

> Write tests. Not too many. Mostly integration.

Don't test implementation details! Just test your component like you would use it in real life.

The closer your tests resemble the way they are being used the more confidence they can give you.

Testing examples for pretty much every use case are [here](https://github.com/kentcdodds/react-testing-library-course)
