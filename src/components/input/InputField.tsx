import React, { FC } from 'react'
import { KeyboardTypeOptions, TextInput, View } from 'react-native'

import { inputFieldStyle } from './styles'
import { FieldContainer } from '~/components/containers'
import { useStore } from '~/store'

interface Props {
  value: string
  placeholder: string
  error: boolean
  secure?: boolean
  keyBoard?: KeyboardTypeOptions
  onTextChange: (value: string) => void
}

export const InputField: FC<Props> = ({
  value,
  placeholder,
  error,
  secure = false,
  keyBoard = 'default',
  onTextChange,
}) => {
  const { theme } = useStore((state) => state)
  const styles = inputFieldStyle(theme)

  return (
    <FieldContainer error={error}>
      <View style={styles.container}>
        <TextInput
          value={value}
          keyboardType={keyBoard}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.accent}
          onChangeText={onTextChange}
          secureTextEntry={secure}
          style={styles.text}
          numberOfLines={1}
          multiline={false}
        />
      </View>
    </FieldContainer>
  )
}
