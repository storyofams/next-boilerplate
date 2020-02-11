import React, {useState} from 'react'
import {Stack, Radio, RadioGroup, Text} from '@components'

export default {
  component: Radio,
  title: 'Radio',
}

export const InRadioGroup = () => {
  const [val, setVal] = useState(null)

  return (
    <>
      <RadioGroup value={val} onChange={setVal}>
        <Radio value="1">one</Radio>
        <Radio value="2">two</Radio>
        <Radio value="3">three</Radio>
      </RadioGroup>
    </>
  )
}
