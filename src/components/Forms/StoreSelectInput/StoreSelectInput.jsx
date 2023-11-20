
import { useAtom } from 'jotai'
import * as store from '../../../store'
import cn from 'classnames'

import './StoreSelectInput.css'

const StoreSelectInput = ({
    className,
    labelClassName,
    inputClassName,
    storeKey,
    children,
    label,
    ...props
}) => {
    
    const [value, setValue] = useAtom(store[storeKey])
    
    return (
        
        <div className={cn('StoreSelectInput', className)}>
            
            {label && (
                <label className={labelClassName}>
                    <span className="label-text">
                        {label}
                    </span>
                </label>
            )}
            
            <select
                className={inputClassName}
                value={value}
                onChange={e => setValue(e.target.value)}
                {...props}>
                {children}
            </select>
        
        </div>
    
    )
    
}

export default StoreSelectInput
