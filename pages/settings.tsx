"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { saveApiSettings, testApiConnection } from "../lib/actions";
import { useToast } from "../hooks/use-toast";
import { Loader2, Settings, CheckCircle2 } from 'lucide-react';
import Link from "next/link";

type AuthStep = "api" | "phone" | "code" | "password" | "completed";

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [authStep, setAuthStep] = useState<AuthStep>("api");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [phoneCodeHash, setPhoneCodeHash] = useState<string | null>(null);
  const [requiresPassword, setRequiresPassword] = useState(false);
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
          description: result.message || "Your Telegram API credentials are working correctly.",
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

  const handleRequestCode = async () => {
    if (!phoneNumber) {
      toast({
        title: "Error",
        description: "Please enter your phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/telegram/auth/request-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (data.success) {
        setPhoneCodeHash(data.phoneCodeHash);
        setAuthStep("code");
        toast({
          title: "Code sent",
          description: "Please check your Telegram app for the verification code.",
        });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send verification code",
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

  const handleSignIn = async () => {
    if (!code || !phoneCodeHash) {
      toast({
        title: "Error",
        description: "Please enter the verification code",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/telegram/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber,
          phoneCodeHash,
          code,
          password: requiresPassword ? password : undefined,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setAuthStep("completed");
        toast({
          title: "Authentication successful",
          description: "You have successfully authenticated with Telegram.",
        });
      } else {
        if (data.requiresPassword) {
          setRequiresPassword(true);
          setAuthStep("password");
          toast({
            title: "2FA Required",
            description: "Please enter your 2FA password",
          });
        } else {
          toast({
            title: "Error",
            description: data.error || "Failed to sign in",
            variant: "destructive",
          });
        }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-balance">Settings</h1>
              <p className="text-muted-foreground">Configure your Telegram API credentials and authenticate</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>

        <div className="space-y-6 max-w-2xl">
          {/* API Configuration Card */}
          <Card>
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

          {/* Telegram Authentication Card */}
          <Card>
            <CardHeader>
              <CardTitle>Telegram Authentication</CardTitle>
              <CardDescription>
                Authenticate with your Telegram account to enable channel data collection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {authStep === "api" && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    First, save your API credentials above, then proceed with authentication.
                  </p>
                  <Button
                    onClick={() => setAuthStep("phone")}
                    disabled={isLoading}
                    className="w-full"
                  >
                    Start Authentication
                  </Button>
                </div>
              )}

              {authStep === "phone" && (
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1234567890"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Enter your phone number in international format (e.g., +1234567890)
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleRequestCode}
                      disabled={isLoading || !phoneNumber}
                      className="flex-1"
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Send Code
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setAuthStep("api")}
                      disabled={isLoading}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              )}

              {authStep === "code" && (
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="code">Verification Code</Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="12345"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      required
                      maxLength={6}
                    />
                    <p className="text-xs text-muted-foreground">
                      Enter the verification code sent to your Telegram app
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSignIn}
                      disabled={isLoading || !code}
                      className="flex-1"
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Verify Code
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setAuthStep("phone");
                        setCode("");
                        setPhoneCodeHash(null);
                      }}
                      disabled={isLoading}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              )}

              {authStep === "password" && (
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="password">2FA Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your 2FA password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Enter your two-factor authentication password
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSignIn}
                      disabled={isLoading || !password}
                      className="flex-1"
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Authenticate
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setAuthStep("code");
                        setPassword("");
                        setRequiresPassword(false);
                      }}
                      disabled={isLoading}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              )}

              {authStep === "completed" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                    <p className="font-medium">Authentication successful!</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You are now authenticated with Telegram. You can start adding channels.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setAuthStep("api");
                      setPhoneNumber("");
                      setCode("");
                      setPassword("");
                      setPhoneCodeHash(null);
                      setRequiresPassword(false);
                    }}
                  >
                    Reset Authentication
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
