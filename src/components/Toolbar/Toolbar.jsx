import useToolbarItems from './useToolbarItems'

import ToolbarItem from './ToolbarItem.jsx'
import ThemeSwitcher from '../ThemeSwitcher'
import Details from '../../components/Details'
import { MdOutlineSettings } from 'react-icons/md'

import './Toolbar.css'

const Toolbar = ({
    ...props
}) => {
    
    const items = useToolbarItems()
    
    return (
        
        <nav id="Toolbar" {...props}>
            
            <ul className="menu menu-horizontal">
                
                {items.map(it => (
                    
                    <li
                        key={it.id}
                        className={it.children ? '' : ''}>
                        
                        {!it.children ? (
                            
                            <ToolbarItem item={it} tabindex="0" />
                            
                        ) : (<>
                            
                            {/* <div className="dropdown dropdown-bottom w-full"> */}
                            
                            {/* <ToolbarItem as="a" item={it} tabindex="0" />
                            
                            <ul className="">
                                {it.children.map(child => (
                                    <li key={child.id}>
                                        <a onClick={() => {
                                            child.onClick()
                                            document.activeElement.blur()
                                        }}>
                                            {child.label}
                                        </a>
                                    </li>
                                ))}
                            </ul> */}
                            
                            <Details summary={<it.Icon className="text-xl" />}>
                                {setOpen => (
                                    <ul className="">
                                        {it.children.map(child => (
                                            <li key={child.id}>
                                                <a onClick={() => {
                                                    console.log('child click', setOpen)
                                                    setOpen(false)
                                                    document.activeElement.blur()
                                                    child.onClick()
                                                }}>
                                                    {child.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </Details>
                            
                        </>)}
                    
                    </li>
                
                ))}
                
            </ul>
            
            <ul className="menu menu-horizontal">
                {/* @todo centered buttons if needed */}
            </ul>
                         
            <ul className="menu menu-horizontal">
                <li>
                    <ThemeSwitcher />
                </li>
                <li>
                    <ToolbarItem
                        href={window.location.pathname.startsWith('/settings')
                            ? '/'
                            : '/settings'
                        }
                        item={{
                            label: 'Settings',
                            Icon: MdOutlineSettings,
                        }} />
                </li>
            </ul>
            
        </nav>
        
    )
    
    /* return (
        
        <nav id="Toolbar" className="">
            <ul>
                {items.map(it => (
                    <li key={it}>
                        {it}
                    </li>
                ))}
            </ul>
        </nav>
        
    ) */
    
}

export default Toolbar
