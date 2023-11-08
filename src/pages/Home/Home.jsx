import { useEffect } from 'preact/hooks'
import { useAtom } from 'jotai'
import * as store from '../../store'

import CodeEditor from '../../components/CodeEditor'
import Splitter from '../../components/Splitter/Splitter.jsx'

import './Home.css'

const Home = () => {
    
    const [code] = useAtom(store.code)
    const [result, setResult] = useAtom(store.result)
    
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
        
        <div id="Home" className="">
            
            {/* <aside className="col-span-6 overflow-y-auto bg-gray-100">
                <CodeEditor defaultValue={code} />
            </aside> */}
            <CodeEditor
                className=""
                wrapperProps={{ className: '' }}
                width="100%"
                defaultValue={code} />
            
            <div className="border-x bg-gray-300" />
            
            <main className=" overflow-y-auto p-1">
                <pre>
                    <code>
                        {result}
                    </code>
                </pre>
            </main>
            
        </div>
        
	)
    
}

export default Home
