import { useRef, useCallback } from 'preact/hooks'
import cn from 'classnames'

import './Details.css'

const Details = ({
    className,
    summary,
    children,
}) => {
    
    const detailsRef = useRef()
    
    const setOpen = useCallback(value => {
        
        if (!detailsRef.current) return
        
        detailsRef.current.open = !detailsRef.current.open
        
    }, [detailsRef.current])
    
    return (
        
        <details
            ref={detailsRef}
            className={cn('Details', className)}>
            
            <summary>
                {summary}
            </summary>
            
            {children(setOpen)}
            
        </details>
        
    )
    
}

export default Details
