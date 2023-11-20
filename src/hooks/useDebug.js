import { useEffect } from 'preact/hooks'
import * as store from '../store'

const dumpStore = ({
    console = true,
    stringify = true
} = {}) => {
    
    const storeObj = {}
    const keys = Object.keys(store)
    
    for (let i = 0; i < keys.length; i++) {
        
        const key = keys[i]
        const value = store[key].read(it => it)
        
        storeObj[key] = typeof value === 'string'
            ? value
            : value?.init ?? value
        
    }
    
    const output = stringify
        ? JSON.stringify(storeObj, null, 4)
        : storeObj
    
    if (console)
        console.log(output)
    
    return output
    
}

const dumpLocalStorage = ({
    console = true,
    stringify = true
} = {}) => {
    
    const localStorageObj = {}
    
    for (let i = 0; i < localStorage.length; i++) {
        
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        
        localStorageObj[key] = value
        
    }
    
    const output = stringify
        ? JSON.stringify(localStorageObj, null, 4)
        : localStorageObj
    
    if (console)
        console.log(output)
    
    return output
    
}

const useDebug = () => {
    
    useEffect(() => {
        
        window.app = window.app || {}
        
        window.app.store = store
        window.app.dumpStore = dumpStore
        window.app.dumpLocalStorage = dumpLocalStorage
        
    }, [store])
    
    return {
        dumpStore,
        dumpLocalStorage,
    }
    
}

export default useDebug
