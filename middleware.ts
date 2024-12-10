import { NextResponse, NextRequest } from "next/server"
import { cookies } from "next/headers"

export async function middleware(request: NextRequest) {
  const cookie = cookies().get("authToken");
  const token = cookie ? cookie.value : undefined;

  const url = request.nextUrl.clone()
  const { pathname } = url


  const protectedRoutes = [
    "/recipes",
    "/recipes/add",
    "/recipes/id",
    "/recipes/id/update"
  ]

  const authRoutes = [
    "/",
    "/account/sign-in",
    "/account/sign-up",
  ]

  const isProtectedRoute = protectedRoutes.includes(pathname)

  const isAuthRoute = authRoutes.includes(pathname)


  if (token) {
    if (isAuthRoute) {
      return NextResponse.redirect(new URL("/recipes", request.url))
    }
  } else {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/account/sign-in", request.url))
    }
  }

  return NextResponse.next()

}

export const config = {
  matcher: [
    "/recipes",
    "/recipes/add",
    "/recipes/id",
    "/recipes/id/update",
    "/account/sign-in",
    "/account/sign-up",
  ]
}