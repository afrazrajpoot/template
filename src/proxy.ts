import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to auth pages without authentication
        if (req.nextUrl.pathname.startsWith('/auth/')) {
          return true;
        }

        // Allow access to unauthorized page
        if (req.nextUrl.pathname === '/unauthorized') {
          return true;
        }

        // Require authentication for all other routes
        if (!token) {
          return false;
        }

        // Check admin routes
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return token.role === 'ADMIN';
        }

        // Allow authenticated users for other routes
        return true;
      }
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (NextAuth API routes - handled by NextAuth)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ]
}
