import { clerkMiddleware } from "@clerk/nextjs/server";


export default clerkMiddleware({
<<<<<<< HEAD
    // publicRoutes: [
=======
    // publicRoutes : [
>>>>>>> b1355de36654917d0c58b1645780d1decca18c6e
    //     '/',
    //     '/events/:id',
    //     '/api/webhook/clerk',
    //     '/api/webhook/stripe',
<<<<<<< HEAD
    //     '/api/uploadthing',
    // ],
    // ignoredRoutes: [
    //     '/api/webhook/clerk',
    //     '/api/webhook/stripe',
    //     '/api/uploadthing',
    // ],
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
=======
    //     'api/uploadthing'
    // ],
    // ignoredRoutes : [
    //     '/api/webhook/clerk',
    //     '/api/webhook/stripe',
    //     'api/uploadthing'
    // ]
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
>>>>>>> b1355de36654917d0c58b1645780d1decca18c6e
};
