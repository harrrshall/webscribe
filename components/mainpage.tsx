"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import axios from 'axios';
import { useChat } from 'ai/react';

export function Mainpage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [url, setUrl] = useState('');
  const [pageType, setPageType] = useState('single');
  const [isLoading, setIsLoading] = useState(false);
  const [crawlResponse, setCrawlResponse] = useState('');
  const [isChatReady, setIsChatReady] = useState(false);
  const [error, setError] = useState('');

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    body: { context: crawlResponse },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleCrawl = async () => {
    if (!isValidUrl(url)) {
      alert('Please enter a valid URL');
      return;
    }

    if (pageType === 'multi') {
      alert('We are working on the multi-page feature. It will roll out soon!');
      return;
    }
  
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post('/api/crawl', { url });
      const jobId = response.data.jobId;
  
      const result = await pollJobStatus(jobId);
  
      if (result.data && result.data.length > 0 && result.data[0].content) {
        setCrawlResponse(result.data[0].content);
        setIsChatReady(true);
      } else {
        setCrawlResponse('');
      }
    } catch (error) {
      setError('Error crawling website. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const isValidUrl = (string: string): boolean => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const pollJobStatus = async (jobId: string) => {
    while (true) {
      try {
        const statusResponse = await axios.get(`/api/crawl/status/${jobId}`);
        if (statusResponse.data.status === 'completed') {
          return statusResponse.data;
        }
      } catch (error) {
        console.error('Error polling job status:', error);
      }
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  };

  const handleChatSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      if (!crawlResponse || crawlResponse.length === 0) {
        setError('No crawl data available. Please crawl a website first.');
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
                  onKeyPress={(e) => e.key === 'Enter' && handleCrawl()}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={handleCrawl}
                  disabled={isLoading}
                >
                  {isLoading ? <LoadingDots /> : <ArrowRightIcon className="w-5 h-5" />}
                </Button>
              </div>
              <RadioGroup className="flex space-x-4 mb-4" value={pageType} onValueChange={setPageType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single" id="single" />
                  <Label htmlFor="single">Single Page</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="multi" id="multi" />
                  <Label htmlFor="multi" className="flex items-center">
                    Multi Page
                    <CrownIcon className="w-4 h-4 ml-1 text-yellow-400" />
                  </Label>
                </div>
              </RadioGroup>
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
                    className={`mb-4 ${
                      message.role === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block p-2 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {message.content}
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

function CrownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
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