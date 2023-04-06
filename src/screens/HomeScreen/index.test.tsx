import React from 'react'
import 'react-native'

import { HomeScreen } from '.'
import { MockedNavigator, render } from '~/utils/setup_test'

it('test home screen', () => {
  const {getAllByText} = render(<MockedNavigator component={HomeScreen} />)
  console.log(getAllByText('this is home screen'))
})
