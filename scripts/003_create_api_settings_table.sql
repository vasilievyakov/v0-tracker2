-- Create table for storing Telegram API credentials
CREATE TABLE IF NOT EXISTS api_settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  api_id TEXT NOT NULL,
  api_hash TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT single_row CHECK (id = 1)
);

-- Enable Row Level Security
ALTER TABLE api_settings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (since it's for app configuration)
CREATE POLICY "Allow all operations on api_settings" 
ON api_settings 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_api_settings_id ON api_settings(id);
