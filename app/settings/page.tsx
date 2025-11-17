"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { saveApiSettings, testApiConnection } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Settings } from 'lucide-react';
import Link from "next/link";

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const apiId = formData.get("api_id") as string;
    const apiHash = formData.get("api_hash") as string;

    try {
      const result = await saveApiSettings(apiId, apiHash);

      if (result.success) {
        toast({
          title: "Settings saved",
          description: "Your Telegram API credentials have been saved.",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to save settings.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTest = async () => {
    setIsTesting(true);
    try {
      const result = await testApiConnection();
      
      if (result.success) {
        toast({
          title: "Connection successful",
          description: "Your Telegram API credentials are working correctly.",
        });
      } else {
        toast({
          title: "Connection failed",
          description: result.error || "Failed to connect to Telegram API.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-balance">Settings</h1>
              <p className="text-muted-foreground">Configure your Telegram API credentials</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Telegram API Configuration</CardTitle>
            <CardDescription>
              Enter your Telegram API credentials to automatically fetch channel data. Get your API ID and Hash from{" "}
              <a 
                href="https://my.telegram.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                my.telegram.org
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="api_id">API ID</Label>
                <Input
                  id="api_id"
                  name="api_id"
                  type="number"
                  placeholder="12345678"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="api_hash">API Hash</Label>
                <Input
                  id="api_hash"
                  name="api_hash"
                  placeholder="0123456789abcdef0123456789abcdef"
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save Settings
                </Button>
                <Button type="button" variant="outline" onClick={handleTest} disabled={isTesting}>
                  {isTesting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Test Connection
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
