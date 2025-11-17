'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, Check, Loader2 } from 'lucide-react'

export function DatabaseSetupBanner() {
  const [isLoading, setIsLoading] = useState(false)
  const [setupComplete, setSetupComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSetup = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/setup-database', {
        method: 'POST',
      })

      const data = await response.json()

      if (data.success) {
        setSetupComplete(true)
        // Reload the page after 2 seconds
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      } else {
        setError(data.error || 'Failed to setup database')
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  if (setupComplete) {
    return (
      <Alert className="mb-6 border-green-500 bg-green-50">
        <Check className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900">Setup Complete!</AlertTitle>
        <AlertDescription className="text-green-800">
          Database has been set up successfully. Reloading...
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Database Setup Required</AlertTitle>
      <AlertDescription className="flex items-center gap-4">
        <span className="flex-1">
          The database tables need to be created. Click the button to set up the database with sample data.
        </span>
        <Button 
          onClick={handleSetup} 
          disabled={isLoading}
          size="sm"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Setting up...
            </>
          ) : (
            'Setup Database'
          )}
        </Button>
      </AlertDescription>
      {error && (
        <div className="mt-2 text-sm text-red-600">
          Error: {error}
        </div>
      )}
    </Alert>
  )
}
