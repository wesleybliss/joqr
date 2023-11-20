import { render } from 'preact'
import { LocationProvider, ErrorBoundary, Router, Route } from 'preact-iso'
import { setNamespace } from './constants'
import useDebug from './hooks/useDebug'
import useTheme from './hooks/useTheme'

import Home from './pages/Home'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import Toolbar from './components/Toolbar/index.jsx'

import './assets/styles/tailwind.css'
import './assets/styles/index.css'

setNamespace('jsrepl')

const App = () => {
    
    useDebug()
    const themeProps = useTheme()
    
    return (
        
        <LocationProvider>
            
            <ErrorBoundary>
                
                <Toolbar {...themeProps} />
                
                <main {...themeProps}>
                    <Router>
                        <Route path="/" component={Home} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/settings/*" component={Settings} />
                        <Route default component={NotFound} />
                    </Router>
                </main>
            
            </ErrorBoundary>
            
        </LocationProvider>
        
    )
    
}

render(<App />, document.getElementById('root'))
