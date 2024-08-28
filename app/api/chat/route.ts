// path: app/api/chat/route.ts

import { streamText } from 'ai';
import { google } from '@ai-sdk/google';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Extract the messages and context from the body of the request
    const body = await req.json();
    // console.log('Received request body:', body);
    const { messages, context } = body;

    // Ensure context is provided
    if (!context) {
      console.log('Context is missing');
      return NextResponse.json({ error: 'Context is required' }, { status: 400 });
    }

    // Prepare the messages array with the context as the first system message
// Prepare the messages array with the enhanced context as the first system message
const fullMessages = [
  { role: 'system', content: `You are an advanced question-answering chatbot. Use the following context extracted from a specific website to answer user queries: ${context}. Base your responses exclusively on this provided context. If asked a question that cannot be answered using the given information, reply: ** "Sorry, there is no information about your query in this website."** nothing else. Do not provide information beyond what is explicitly stated in the context.` },
  ...messages
];

    // Get a language model
    const model = google('models/gemini-1.5-flash-latest');

    // Call the language model with the prompt
    const result = await streamText({
      model,
      messages: fullMessages,
      maxTokens: 4096,
      temperature: 0.7,
      topP: 0.4,
    });

    // Respond with a streaming response
    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
