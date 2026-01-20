import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  // 👇 Ye line Terminal mein print honi chahiye jab aap page reload karein
  console.log("Middleware is running for:", req.url);
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};