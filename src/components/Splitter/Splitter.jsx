import { useState, useEffect } from 'preact/hooks'
import cn from 'classnames'

const Splitter = ({
    initialOffset,
    children,
}) => {
    
    const [offset, setOffset] = useState(initialOffset)
    const [isDragging, setIsDragging] = useState(false)
    
    const fn = () => {
        
    }
    
    useEffect(() => {
        
        
        
    })
    
    return (
        
        <div
            className="Splitter grid grid-flow-col auto-cols-max"
        >
            
            <div className="" style={{ width: `calc(${100 - offset}% - 2px)` }}>
                {children[0]}
            </div>
            
            <div
                className={cn('cursor-col-resize', {
                    'bg-gray-500': isDragging,
                    'bg-gray-300': !isDragging,
                })}
                style={{
                   width: '4px',
                }}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
            />
            
            <div className="" style={{ width: `calc(${100 - offset}% - 2px)` }}>
                {children[1]}
            </div>
            
        </div>
        
    )
    
}

Splitter.defaultProps = {
    initialOffset: 50,
}

export default Splitter
