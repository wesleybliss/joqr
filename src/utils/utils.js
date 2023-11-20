
export const remToPx = rem => {
    
    const el = document.documentElement // document.createElement('div')
    // el.style.fontSize = '16px'
    
    return parseFloat(rem) * parseFloat(getComputedStyle(el).fontSize)
    
}
