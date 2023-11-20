import { useAtom } from 'jotai'
import { theme as storeTheme } from '../../store'
import { themes } from '../../constants'

import { MdLightMode, MdDarkMode } from 'react-icons/md'

import './ThemeSwitcher.css'

const ThemeSwitcher = ({
    
}) => {
    
    const [theme, setTheme] = useAtom(storeTheme)
    
    const handleToggleTheme = () => {
        
        setTheme(prev => (
            prev === themes.light
                ? themes.dark
                : themes.light
        ))
        
    }
    
    const Icon = theme === themes.light
        ? MdLightMode
        : MdDarkMode
    
    return (
        
        <a onClick={handleToggleTheme}>
            <Icon className="text-xl" />
        </a>
        
    )
    
}

export default ThemeSwitcher
