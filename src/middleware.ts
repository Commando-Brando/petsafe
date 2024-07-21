import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Protects routes that match this regex with auth
const isProtectedRoute = createRouteMatcher(["/dash(.*)"]);

// Defines middleware function with clerk auth route protector
export default clerkMiddleware((auth, request) => {
    if (isProtectedRoute(request)) auth().protect();
})

// Config lets NextJs know to use auth on most things in the project
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};