export async function POST(req) {

    if (req.method !== 'POST') {
      return Response.json(
        { message: 'Only POST method is allowed' },
        { status: 405 }
      );
    }
  
    const { username, password } = await req.json();
  
    if ( !username || !password ) {
      return Response.json(
        { message: 'Please provide valid username and password' },
        { status: 400 }
      );
    }
 

    try {
      const url = 'http://127.0.0.1:8000/login/';

      const response  = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return new Response(JSON.stringify(errorData), {
          status: response.status,
        });
      }
  
      const data = await response.json();
  
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error:', error);
      return new Response(
        JSON.stringify({ message: 'Internal Server Error' }),
        { status: 500 }
      );
    }
  }
  