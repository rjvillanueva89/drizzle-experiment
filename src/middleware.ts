export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/users", "/properties", "/property/:path*"],
}
