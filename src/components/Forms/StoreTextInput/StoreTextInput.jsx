import { useAtom } from 'jotai'
import * as store from '../../../store'
import cn from 'classnames'

import './StoreTextInput.css'

const StoreTextInput = ({
    className,
    labelClassName,
    inputClassName,
    storeKey,
    label,
    ...props
}) => {
    
    const [value, setValue] = useAtom(store[storeKey])
    
    return (
        
        <div className={cn('StoreTextInput', className)}>
            
            {label && (
                <label className={labelClassName}>
                    <span className="label-text">
                        {label}
                    </span>
                </label>
            )}
            
            <input
                className={inputClassName}
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                {...props} />
            
        </div>
        
    )
    
}

export default StoreTextInput
