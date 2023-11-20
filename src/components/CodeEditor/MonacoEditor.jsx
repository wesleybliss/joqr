import { useRef, useMemo } from 'preact/hooks'
import { useAtom } from 'jotai'
import deepmerge from 'deepmerge'

import * as store from '../../store'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'

const MonacoEditor = ({
    options,
    ...props
}) => {
    
    const editorRef = useRef(null)
    
    const [, setCode] = useAtom(store.code)
    const [codeTheme] = useAtom(store.codeTheme)
    const [minimapEnabled] = useAtom(store.minimapEnabled)
    
    const editorOptions = useMemo(() => {
        
        const opts = {
            minimap: {
                enabled: minimapEnabled,
            },
            codeLens: minimapEnabled,
        }
        
        return deepmerge(opts, (options || {}))
        
    }, [options, minimapEnabled])
    
    const handleEditorChange = (value, event) => {
        // here is the current value
        setCode(value)
    }
    
    const handleEditorDidMount = (editor, monaco) => {
        /* console.log('onMount: the editor instance:', editor);
        console.log('onMount: the monaco instance:', monaco); */
        editorRef.current = editor
    }
    
    const handleEditorWillMount = monaco => {
        // console.log('beforeMount: the monaco instance:', monaco);
    }
    
    const handleEditorValidation = markers => {
        // model markers
        // markers.forEach(marker => console.log('onValidate:', marker.message));
    }
    
    const showValue = () => {
        console.log('showValue', editorRef.current.getValue())
    }
    
    return (
        
        <Editor
            id="MonacoEditor"
            className=""
            height="100vh"
            defaultLanguage="javascript"
            defaultValue=""
            theme={codeTheme}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            beforeMount={handleEditorWillMount}
            onValidate={handleEditorValidation}
            options={editorOptions}
            {...props} />
        
    )
    
}

export default MonacoEditor

/*
Editor({
    defaultValue,
    defaultLanguage,
    defaultPath,
    value,
    language,
    path,
    theme,
    line,
    loading,
    options,
    overrideServices,
    saveViewState,
    keepCurrentModel,
    width,
    height,
    className,
    wrapperProps,
    beforeMount,
    onMount,
    onChange,
    onValidate,
}
*/
