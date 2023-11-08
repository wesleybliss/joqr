import { atom } from 'jotai'

const sampleCode = `
const items = Array(20).fill(null).map((_, i) => \`Item #$\{i + 1}\`)

JSON.stringify(items, null, 4)
`

export const code = atom(sampleCode)

export const result = atom('')
