import defaultTheme from 'tailwindcss/defaultTheme'
import cn from 'classnames'

import './FontSizeToggle.css'
import { useAtom } from 'jotai'
import * as store from '../../store'

const labels = Object.keys(defaultTheme.fontSize).slice(0, 6)

const FontSizeToggle = ({
    className,
    storeKey,
}) => {
    
    const [, setFontSize] = useAtom(store[storeKey])
    
    return (
        
        <ul className={cn('FontSizeToggle', className)}>
            {labels.map(it => (
                <li key={`FontSizeToggle-label-${it}`}>
                    <a onClick={() => setFontSize(it.toLowerCase())}>
                        {it}
                    </a>
                </li>
            ))}
        </ul>
        
    )
    
}

FontSizeToggle.defaultProps = {
    storeKey: 'codeFontSize',
}

export default FontSizeToggle
