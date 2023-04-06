import { StyleSheet } from 'react-native'

import { AppTheme } from '@react-navigation/native'

const FIELD_CONTAINER_HEIGHT = 56
const FIELD_CONTAINER_BORDER_WIDTH = 1
const FIELD_CONTAINER_BORDER_RADIUS = 0

export const screenStyles = ({ colors, space: { large } }: AppTheme) =>
  StyleSheet.create({
    keyboardAvoid: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.background,
    },
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    statusBarContainer: {
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
    },
    headerContainer: {
      flex: 0,
    },
    paddingContainer: {
      paddingHorizontal: large,
    },
    footerContainer: {
      flex: 0,
    },
  })

export const fieldContainerStyles = (
  { colors: { danger, background, secondary }, space: { medium } }: AppTheme,
  error: boolean
) =>
  StyleSheet.create({
    container: {
      height: FIELD_CONTAINER_HEIGHT,
      backgroundColor: background,
      borderRadius: FIELD_CONTAINER_BORDER_RADIUS,
      justifyContent: 'center',
      alignContent: 'center',
      borderWidth: FIELD_CONTAINER_BORDER_WIDTH,
      margin: medium,
      borderBottomColor: error ? danger : secondary,
      borderTopColor: background,
      borderStartColor: background,
      borderEndColor: background,
    },
    childrenContainer: {
      flex: 1,
    },
  })
