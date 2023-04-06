import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { ThemeSlice, createThemeSlice } from '~/store/theme'

interface Store extends ThemeSlice {}

export const useStore = create<Store>()(
  persist(
    (set, get, api) => ({
      ...createThemeSlice(set, get, api),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
