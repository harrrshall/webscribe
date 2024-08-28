import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(
  request: Request,
  { params }: { params: { jobId: string } }
) {
  const jobId = params.jobId;

  if (!jobId) {
    return NextResponse.json({ message: 'Job ID is required' }, { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://api.firecrawl.dev/v0/crawl/status/${jobId}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.FIRECRAWL_API_KEY}`
        }
      }
    );

    // console.log('Crawl status response:', response.data); // Add logging here
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error checking crawl status:', error);
    return NextResponse.json({ message: 'Error checking crawl status' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { jobId: string } }
) {
  return NextResponse.json({ message: 'POST method not supported' }, { status: 405 });
}