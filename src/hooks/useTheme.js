import { useMemo, useEffect } from 'preact/hooks'
import { useAtom } from 'jotai'
import * as store from '../store'
import { fontSizeClassMap } from '../constants.js'
import cn from 'classnames'

const useTheme = () => {
    
    const [theme] = useAtom(store.theme)
    const [uiFontSize] = useAtom(store.uiFontSize)
    const [uiFontFamily] = useAtom(store.uiFontFamily)
    
    const className = useMemo(() => cn(
        fontSizeClassMap[uiFontSize],
    ), [uiFontSize])
    
    useEffect(() => {
        
        document.documentElement.dataset.theme = theme
        
        document.documentElement.style.setProperty('--ui-font-family', uiFontFamily)
        
    }, [theme, uiFontFamily])
    
    return {
        className,
    }
    
}

export default useTheme
