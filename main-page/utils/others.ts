export function addUrlParams(...params: { key: string, value: string }[]) {
    const newUrl = new URL(window.location.href)
    for (const { key, value } of params) {
        newUrl.searchParams.set(key, value)
    }
    window.location.href = newUrl.href
}

export function scrollToElement(elementId : string) {
    const targetElement = document.getElementById(elementId);
    targetElement?.scrollIntoView({ behavior: 'smooth' });
}

export function serializeData(object : unknown) {
        return JSON.parse(JSON.stringify(object))
}