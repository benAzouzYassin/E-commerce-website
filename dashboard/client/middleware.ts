import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest ) {
    const key = process.env["SECRET_KEY"]
    const paramKey = new URL(request.url).searchParams.get("key")
    if(request.nextUrl.href.indexOf("auth") === -1 && key !== paramKey){
        return NextResponse.redirect(new URL('/auth', request.url))
    }
}
export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}  