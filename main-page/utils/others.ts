export function addUrlParams(...params: { key: string, value: string }[]) {
    const paramsString = params.map(param => `${param.key}=${param.value}`).join("&")

    const newUrl= new URL(window.location.href)
        for (const {key , value} of params) {
            newUrl.searchParams.set(key , value)
        }     
    window.location.href  = newUrl.href

}