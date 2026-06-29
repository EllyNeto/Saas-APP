import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
export const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

// In Next.js 16, the middleware filename and named export have been renamed to 'proxy'
export const middlewareHandler = async (auth: any, request: any) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
};

export const proxy = clerkMiddleware(middlewareHandler);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    // Required for Clerk auto-proxy
    "/__clerk/:path*",
  ],
};
