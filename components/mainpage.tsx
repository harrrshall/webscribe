"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { useChat } from 'ai/react';
import ReactMarkdown from 'react-markdown';
import '../app/markdown-styles.css';


const JINA_API_URL = 'https://r.jina.ai/';
const JINA_API_KEY = "jina_d51b3552751146f3b2c0e8c2bcbbd925Dcz6KDK2slzCxzHrGuTofnEg5rm0"

export function Mainpage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatReady, setIsChatReady] = useState(false);
  const [error, setError] = useState('');
  const [websiteContent, setWebsiteContent] = useState('');

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    body: { context: websiteContent },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const fetchWebsiteContent = async (url: string) => {
    try {
      const response = await fetch(`${JINA_API_URL}${url}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${JINA_API_KEY}`
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.text();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const handleFetch = async () => {
    if (!isValidUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const data = await fetchWebsiteContent(url);
      setWebsiteContent(data);
      setIsChatReady(true);
    } catch (error) {
      setError('Error accessing the website. Please try again.');
      console.error('Fetch error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isValidUrl = (string: string): boolean => {
    try {
      new URL(string.startsWith('http') ? string : `http://${string}`);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleChatSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      if (!isChatReady) {
        setError('Please fetch a website first.');
        return;
      }
      await handleSubmit(e);
    } catch (error) {
      setError('Error sending message. Please try again.');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body flex flex-col">
      <header className="bg-background border-b border-border py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold mr-6 font-heading">
            WebScribe
          </a>
        </div>
        <div className="flex items-center">
          <Switch
            id="theme-switch"
            checked={theme === 'dark'}
            onCheckedChange={toggleTheme}
          />
          <span className="ml-2 text-muted-foreground">
            {theme === 'dark' ? 'Dark' : 'Light'} Mode
          </span>
        </div>
      </header>
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-8 font-heading">Talk with website</h1>
        <div className="w-full max-w-2xl bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
          {!isChatReady ? (
            <div className="p-4">
              <div className="flex items-center mb-4">
                <Input
                  type="text"
                  placeholder="Enter URL to talk..."
                  className="flex-1"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleFetch()}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={handleFetch}
                  disabled={isLoading}
                >
                  {isLoading ? <LoadingDots /> : <ArrowRightIcon className="w-5 h-5" />}
                </Button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          ) : (
            <>
              <div className="h-96 overflow-y-auto p-4">
                {messages.length === 0 && (
                  <div className="text-center text-muted-foreground">
                    Ask anything from website
                  </div>
                )}
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'
                      }`}
                  >
                    <div
                      className={`inline-block p-2 rounded-lg ${message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                        }`}
                    >
                      <ReactMarkdown className="markdown-content">
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <form onSubmit={handleChatSubmit} className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1"
                    value={input}
                    onChange={handleInputChange}
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="ml-2"
                  >
                    <ArrowRightIcon className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function LoadingDots() {
  return (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
}
