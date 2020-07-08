import React from 'react'
import {action} from '@storybook/addon-actions'
import {Text} from '@/components'
import Icon from './Icon'

export default {
  component: Icon,
  title: 'Icon',
}

const allIcons = (require as any)
  .context('./library', false, /\.svg$/)
  .keys()
  .map(k => k.replace('./', '').replace('.svg', ''))

export const library = () => (
  <table>
    <tr
      style={{
        border: '1px solid #222',
        textAlign: 'left',
        padding: '8px',
      }}
    >
      <th>name</th>
      <th>default</th>
      <th>larger</th>
    </tr>
    {allIcons.map(name => (
      <tr
        style={{
          border: '1px solid #222',
          textAlign: 'left',
          padding: '8px',
        }}
        key={name}
      >
        <td>
          <Text mr="40px" fontSize="20px" lineHeight={1}>
            {name}
          </Text>
        </td>
        <td>
          <Icon icon={name} color="grey" mr="90px" fontSize="20px" />
        </td>
        <td>
          <Icon icon={name} color="primary500" fontSize="30px" />
        </td>
      </tr>
    ))}
  </table>
)

const commonProps = {
  icon: 'account',
  fontSize: '60px',
}
// different semantics
export const asButton = () => <Icon {...commonProps} onClick={action('clicked')} />
export const asAtag = () => <Icon {...commonProps} href="https://www.example.com" />
export const asH1 = () => <Icon {...commonProps} as="h1" />
