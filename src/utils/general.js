export function getRedirectUrl(location) { 
     
    if (location.pathname === "/") {
        return "/login";
    }

    return `/login?redirect=${location.pathname}${location.search}`
}