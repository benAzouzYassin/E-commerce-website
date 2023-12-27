"use client"

export function addUrlParams(...params: { key: string, value: string }[]) {
    const newUrl = new URL(window?.location?.href)
    for (const { key, value } of params) {
        newUrl.searchParams.set(key, value)
    }
    if(window){
        window.location.href = newUrl.href
    }
}
