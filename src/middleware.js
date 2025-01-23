import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function middleware(request) {

  const cookieStore = await cookies()
  const host = request.headers.get('host'); 
  const [subdomain] = host.split('.'); 

  if (subdomain === 'www') {
    return NextResponse.next();
  }

  cookieStore.set('client', subdomain ,{
    httpOnly: false,
    path: '/',
    secure: true,
    sameSite: 'strict'
  });

  return NextResponse.next();
}