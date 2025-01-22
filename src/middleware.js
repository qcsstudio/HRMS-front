import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export  function middleware(request) {
    const cookieStore =  cookies()

  const host = request.headers.get('host'); 
  console.log("host" , host);
  
  const [subdomain] = host.split('.'); 

  console.log("subdomain" , subdomain);

  if (subdomain === 'www' || host === 'example.com') {
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
