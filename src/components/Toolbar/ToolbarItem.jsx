/**
 * Creates a toolbar item with button & icon
 * 
 * @param {String} [as] HTML element name to use as root
 * @param {ToolbarItem} item Item to render
 * @param {Boolean} [closeMenu] Auto blur active element after click handler
 * @param {Boolean} [withTooltip] Add `data-tip` of label
 * @param {*[]} [props] Extra props to pass to the root element
 * @returns {Element}
 * 
 * @typedef ToolbarItem
 * @property {Number} [id]
 * @property {String} label Text label
 * @property {PreactElement|*} Icon
 * @property {ToolbarItem[]} [children] Nested children
 */
const ToolbarItem = ({
    as: Tag,
    item,
    closeMenu,
    withTooltip,
    ...props
} = {}) => {
    
    return (
        
        <Tag
            className="tooltip tooltip-bottom"
            data-tip={withTooltip ? item.label : undefined}
            onClick={e => {
                
                item.onClick?.(e)
                
                if (closeMenu)
                    document.activeElement.blur()
                
            }}
            {...props}>
            
            {item.Icon
                ? <item.Icon className="text-xl" />
                : item.label}
            
        </Tag>
        
    )
}

ToolbarItem.defaultProps = {
    as: 'a',
    closeMenu: false,
    withTooltip: false,
}

export default ToolbarItem
