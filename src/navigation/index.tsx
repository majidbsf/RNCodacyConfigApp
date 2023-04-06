import React, { FC, useCallback, useRef } from 'react'
import { Keyboard } from 'react-native'

import { NavigationContainer, NavigationState } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppParamsList } from './types'
import { HomeScreen } from '~/screens/HomeScreen'
import { LoginScreen } from '~/screens/LoginScreen'

export const AppNavigation: FC = () => {
  const routeNameRef = useRef<string>()
  const { Navigator, Screen } = createNativeStackNavigator<AppParamsList>()

  const onStateChange = useCallback(
    async (state: NavigationState | undefined) => {
      const previousRouteName = routeNameRef.current
      const currentRouteName = state?.routeNames[state.index]

      if (previousRouteName !== currentRouteName) {
        Keyboard.dismiss()
        routeNameRef.current = currentRouteName
        console.log(
          `Screen tracking: navigated to: "${currentRouteName}" from: "${previousRouteName}"`
        )
      }
    },
    []
  )

  return (
    <NavigationContainer onStateChange={onStateChange}>
      <Navigator
        initialRouteName={'LOGIN_SCREEN'}
        screenOptions={{ headerShown: false }}>
        <Screen name={'LOGIN_SCREEN'} component={LoginScreen} />
        <Screen name={'HOME_SCREEN'} component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
