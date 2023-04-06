import React, { FC } from 'react'

import { AppButton } from '~/components/buttons'
import { Screen } from '~/components/containers'
import { InputField } from '~/components/input'

export const LoginScreen: FC = () => {
  return (
    <Screen footer={<AppButton label={'login'} onPress={() => {}} />}>
      <InputField
        value={''}
        placeholder={'user email'}
        onTextChange={() => {}}
        error={false}
        keyBoard={'email-address'}
      />
      <InputField
        value={''}
        placeholder={'user password'}
        onTextChange={() => {}}
        error={false}
        secure={true}
      />
    </Screen>
  )
}
