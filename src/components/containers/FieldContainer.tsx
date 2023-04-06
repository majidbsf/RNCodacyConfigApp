import React, { FC, ReactElement } from 'react'
import { View } from 'react-native'

import { fieldContainerStyles } from './styles'
import { useStore } from '~/store'

interface Props {
  error?: boolean
  children: ReactElement
}

export const FieldContainer: FC<Props> = ({ error = false, children }) => {
  const { theme } = useStore((state) => state)
  const styles = fieldContainerStyles(theme, error)
  return (
    <View style={styles.container}>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  )
}
