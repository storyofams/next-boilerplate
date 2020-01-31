import React from 'react'

import {storiesOf} from '@storybook/react'

import {Spinner} from './Spinner'

storiesOf('Spinner', module)
  .add('default', () => <Spinner />)
  .add('modified', () => <Spinner stroke="8px" fontSize="100px" color="blue" />)
