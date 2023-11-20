import { useState, useEffect } from 'preact/hooks'
import { useAtom } from 'jotai'
import * as store from '../../store'

import { MdViewSidebar, MdFormatSize } from 'react-icons/md'

const createItems = (idBase = 0, labels = [], fn = () => ({})) => labels.map((label, i) => {
    
    const value = {
        id: (idBase + i + 1),
        label,
    }
    
    return { ...value, ...fn(value) }
    
})

const fontSizeLabels = ['XS', 'SM', 'BASE', 'LG', 'XL']

const useToolbarItems = () => {
    
    const [items, setItems] = useState([])
    
    const [, setFontSize] = useAtom(store.codeFontSize)
    const [, setMinimapEnabled] = useAtom(store.minimapEnabled)
    
    useEffect(() => {
        
        setItems([
            {
                label: 'Toggle Minimap',
                Icon: MdViewSidebar,
                onClick: () => setMinimapEnabled(prev => !prev),
            },
            {
                label: 'Font Size',
                Icon: MdFormatSize,
                children: createItems(20, fontSizeLabels, it => ({
                    onClick: () => setFontSize(it.label.toLowerCase()),
                })),
            },
        ].map((it, i) => ({
            id: i + 1,
            ...it,
        })))
        
    }, [])
    
    return items
    
}

export default useToolbarItems
