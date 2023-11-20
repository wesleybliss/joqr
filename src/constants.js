let NS = ''

export const setNamespace = value => {
    
    NS = value
    
    if (!NS?.length)
        throw new Error('No namespace set')
    
    for (const k of Object.keys(keys)) {
        
        const slug = `${NS}.${k}`
        
        keys[slug] = slug
        delete keys[k]
        
    }
    
}

const keys = {}

export const key = slug => {
    keys[slug] = slug
}

/**
 * Helper utility to prefix all keys in a map to use a namespace
 *
 * @param {String} namespace Storage namespace prefix
 * @param {Object} altKeys (Optional) Storage key/values. Defaults to the internally managed keys map
 */
export const getPrefixedKeys = (namespace, altKeys = null) => {
    
    const items = altKeys || keys
    
    if (!namespace)
        return items
    
    return Object.keys(items).reduce((acc, it) => ({
        ...acc,
        [it]: `${namespace}.${items[it]}`,
    }), {})
    
}

key('theme')

key('uiFontSize')
key('uiFontFamily')
key('codeFontSize')
key('codeFontFamily')
key('minimapEnabled')

const prefixedKeys = getPrefixedKeys(NS)

export { prefixedKeys as keys }

export const themes = {
    light: 'light',
    dark: 'business',
}

export const fontSizeClassMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
}
