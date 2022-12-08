export function getRedirectUrl(location) { 
    console.log(location)      
    if (location.pathname === "/") {
        return "/login";
    }

    return `/login?redirect=${location.pathname}${location.search}`
}