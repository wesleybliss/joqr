import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { keys, themes } from '../constants'

export const theme = atomWithStorage(keys.theme, 'light')

export const uiFontSize = atomWithStorage(keys.uiFontSize, 'base')
export const uiFontFamily = atomWithStorage(keys.uiFontFamily, 'Roboto')

export const codeFontSize = atomWithStorage(keys.codeFontSize, 'base')
export const codeFontFamily = atomWithStorage(keys.codeFontFamily, '"JetBrains Mono", monospace')

export const codeTheme = atom(get => (
    get(theme) === themes.light
        ? 'light'
        : 'vs-dark'
))

export const minimapEnabled = atomWithStorage(keys.minimapEnabled, false)
