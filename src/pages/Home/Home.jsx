import { useEffect } from 'preact/hooks'
import { useAtom } from 'jotai'
import * as store from '../../store'
import { fontSizeClassMap } from '../../constants.js'
import { remToPx } from '../../utils/index.js'
import defaultTheme from 'tailwindcss/defaultTheme'
import cn from 'classnames'

import useDebug from '../../hooks/useDebug'

import FontSizeToggle from '../../components/FontSizeToggle/FontSizeToggle.jsx'
import CodeEditor from '../../components/CodeEditor'
// import Splitter from '../../components/Splitter/Splitter.jsx'

import './Home.css'


const Home = () => {
    
    const [code] = useAtom(store.code)
    const [result, setResult] = useAtom(store.result)
    const [codeFontSize] = useAtom(store.codeFontSize)
    const [codeFontFamily] = useAtom(store.codeFontFamily)
    
    const { dumpStore, dumpLocalStorage } = useDebug()
    
    useEffect(() => {
        
		if (!code?.length)
            return setResult('-')
        
		try {
			setResult(eval(code)?.toString() ?? '-')
		} catch (e) {
			setResult(e?.message ?? 'Unknown error')
		}
        
	}, [code])
    
    /* return (
        <div>
            <Splitter>
                <div className="left panel">
                    left panel
                </div>
                
                <div className="right panel">
                    right panel
                </div>
            </Splitter>
        </div>
    ) */
    
	return (
        
        <div id="Home" className="page">
            
            {/* <div>
                <pre>
                    <code>
                        {dumpStore({ console: false })}
                        {dumpLocalStorage({ console: false })}
                    </code>
                </pre>
            </div> */}
            
            <div className="relative">
                <CodeEditor
                    className={cn('h-screen', fontSizeClassMap[codeFontSize])}
                    wrapperProps={{ className: '' }}
                    width="100%"
                    defaultValue={code}
                    options={{
                        fontFamily: codeFontFamily,
                        fontSize: remToPx(defaultTheme.fontSize[codeFontSize][0]),
                    }} />
                <FontSizeToggle className="top-1 right-1"/>
            </div>
            
            <div className="bg-base-200/30 hover:bg-base-200 cursor-col-resize" />
            
            <main className="overflow-auto p-1 text-sm">
                <pre className={fontSizeClassMap[codeFontSize]}>
                    <code>
                        {result}
                    </code>
                </pre>
            </main>
            
        </div>
        
	)
    
}

export default Home
