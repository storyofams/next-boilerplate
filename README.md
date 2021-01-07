<p align="center">
  <a href="https://storyofams.com/" target="_blank" align="center">
    <img src="https://storyofams.com/blog/story-of-ams-logo-small@3x.png" alt="Story of AMS" width="120">
  </a>
  <h1 align="center">next-boilerplate</h1>
</p>

## Building components

1. If it has complex functionality add a test file
2. Write one or more stories
3. If you're building a primitive it should look like this:
4. have fun

## Styled system

This project uses an extension over styled-system that includes many handy shortcuts like `maxW`, `d='flex'`, `h` (instead of `height`). You can see all properties in the `@lib/system` file.
If you build a primitive, always include the entire system like this:

```
import {system, SystemProps} from '~/lib'

const Button = styled.button<SystemProps<React.HTMLAttributes<HTMLDivElement>>>`
    ...
    ${system}
`


const Box = styled.button<SystemProps>`
    ...
    ${system}
`
```

## The CSS function

sometimes you need to only add props from the theme, in those cases its often easier to use the `css` utility

```
import {css} from '~/lib'

const Button = styled.button(css({
    color: 'grey400',
    borderRadius: 'sm',
    p: [1,2,3], // can take responsive arrays just like styled-system
    d: 'inline-flex'
}))
```

this will automatically create a styled component that takes its properties from the theme

## Variants

Sometimes its good to have multiple variantions (or `variants`) of a single component. In this case use the `variant` prop like this:

```
import styled from 'styled-components'
import {variant, system, SystemProps} from '~/lib'

const Text = styled(Box)<SystemProps>`
  ${variant({
    variants: {
      title: {
        fontFamily: 'heading',
        fontSize: 8,
        fontWeight: 'bold',
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
      body: {
        fontSize: 5,
        lineHeight: 1.8,
      },
    }
  })
}
```

you can then use them like this

```
<Text as='h2' variant='title'>Lorem Ipsum</Text>
```

## Ease of use

- I have hidden a bunch of files to make the whole thing easier to understand. If you need to tweak them you can unhide them from the `.vscode` folder.

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

- project structure with eslint, prettier, husky, alias, storybook, fontfaceobserver and all other bells and whistles
- A bunch of base components that make it easy to get going
- A theme file and css normalizer
- A bunch of hooks and utils

## Testing

#### Why tests?

- less bugs
- higher quality software in less time
- automatic documentation
- tdd leads to better workflow
- writing tests takes very little time

#### What to test:

> Write tests. Not too many. Mostly integration.
> [https://kentcdodds.com/blog/write-tests](start here if you don't know what to test)

- **don't test implementation details**
- just test your component like you would use it in real life.

> The closer your tests resemble the way they are being used the more confidence they can give you

bad test:

> test if button with the text "edit" sets isOpen to true
> -> isOpen could be renamed and the test would fail for no reason
> -> "edit" could be changed to "Edit" and the test would fail for no reason

good test:

> test if item with data-testid='modal' is in the dom after data-testid='edit-btn' was clicked

**you can find a simple test example in the radio component.**

testing examples for pretty much every use case are [here](https://github.com/kentcdodds/react-testing-library-course)

## Commit messages

uses [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) and husky to enforce them.

in short commit messages should look like

```
<type>[optional scope]: <description>
```

examples:

```
feat(box): added border prop for styled-system
fix: fixed crashing issue on IE
refactor(landing page): moved data fetching to swr
```

possible types: `fix`,`feat`,`refactor`,`docs`,`test`,`chore`

## SEO

uses [next-seo](https://github.com/garmeeh/next-seo)

## Missing something?

open an issue on the repo with your proposed change.

## Roadmap

- [ ] authentication wrapper
- [ ] circular dependencies handler
- [ ] extract All components into styleable base components (aka ACL reborn)
- [ ] make a helper for omiting all the conflicting props from default html types
