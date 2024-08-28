// path: app/api/crawl/status/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.url) {
    return NextResponse.json({ message: 'URL is required' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.firecrawl.dev/v0/crawl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.FIRECRAWL_API_KEY}`
      },
      body: JSON.stringify({ url: body.url })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`HTTP error! status: ${response.status}, body: ${errorText}`);
      return NextResponse.json({ message: `Error from Firecrawl API: ${errorText}` }, { status: response.status });
    }

    const data = await response.json();
    // console.log('Crawl job submitted:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error calling Firecrawl API:', error);
    return NextResponse.json({ message: 'Error calling Firecrawl API', error: (error as Error).message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  return NextResponse.json({ message: 'GET method not supported' }, { status: 405 })
}