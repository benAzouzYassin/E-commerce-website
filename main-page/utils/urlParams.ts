"use client"

export function addUrlParams(...params: { key: string, value: string }[]) {
    const newUrl = new URL(window?.location?.href)
    for (const { key, value } of params) {
        newUrl.searchParams.set(key, value)
    }
    if (window) {
        window.location.href = newUrl.href
    }
}

export function clearFilter() {
    window.location.href = window.location.origin + window.location.pathname;
}