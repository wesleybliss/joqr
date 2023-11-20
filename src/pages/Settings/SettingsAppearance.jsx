import { useAtom } from 'jotai'
import * as store from '../../store'
import { fontSizeClassMap } from '../../constants'

import StoreTextInput from '../../components/Forms/StoreTextInput'
import StoreSelectInput from '../../components/Forms/StoreSelectInput'

const SettingsAppearance = () => {
    
    return (
        
        <div id="SettingsAppearance">
            
            <div className="flex gap-4">
                <StoreTextInput
                    storeKey="uiFontFamily"
                    label="UI Font Family"
                    placeholder="Roboto" />
                <StoreSelectInput
                    storeKey="uiFontSize"
                    label="UI Font Size"
                    placeholder="base">
                    {Object.keys(fontSizeClassMap).map(it => (
                        <option key={`ui-font-size-${it}`} value={it}>
                            {it}
                        </option>
                    ))}
                </StoreSelectInput>
            </div>
            
            <div className="flex gap-4 mt-4">
                <StoreTextInput
                    storeKey="codeFontFamily"
                    label="Code Font Family"
                    placeholder="Roboto" />
                <StoreSelectInput
                    storeKey="codeFontSize"
                    label="Code Font Size"
                    placeholder="base">
                    {Object.keys(fontSizeClassMap).map(it => (
                        <option key={`code-font-size-${it}`} value={it}>
                            {it}
                        </option>
                    ))}
                </StoreSelectInput>
            </div>
            
        </div>
        
    )
    
}

export default SettingsAppearance
