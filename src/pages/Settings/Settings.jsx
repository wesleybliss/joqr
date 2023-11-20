import { useMemo } from 'preact/hooks'
import { ErrorBoundary, Route, Router } from 'preact-iso'
import cn from 'classnames'

import SettingsAppearance from './SettingsAppearance'
import SettingsStorage from './SettingsStorage'

import './Settings.css'

const sidebarLinks = [
    ['Appearance', '/settings/appearance'],
    ['Storage', '/settings/storage'],
].map((it, i) => [`sidebar-link-${i}`, ...it])

const Settings = () => {
    
    return (
        
        <div id="Settings" className="page">
            
            <aside>
                <ul>
                    {sidebarLinks.map(([id, label, url], i) => (
                        <li key={id}>
                            <a href={url} className={cn({
                                'active': (
                                    window.location.pathname === url ||
                                    (window.location.pathname === '/settings' && i === 0)
                                ),
                            })}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
            
            <div className="content">
                <ErrorBoundary>
                    <Router>
                        <Route path="/" component={SettingsAppearance} />
                        <Route path="/appearance" component={SettingsAppearance} />
                        <Route path="/storage" component={SettingsStorage} />
                    </Router>
                </ErrorBoundary>
            </div>
            
        </div>
    
    )
    
}

export default Settings
