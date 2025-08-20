export default defineNuxtRouteMiddleware((to) => {
    const token = useCookie('auth_token')
    const isAuthenticated = !!token.value

    const publicPages = ['/login', '/register']

    if (!isAuthenticated && !publicPages.includes(to.path)) {
        return navigateTo('/login')
    }

    if (isAuthenticated && publicPages.includes(to.path)) {
        return navigateTo('/')
    }
})