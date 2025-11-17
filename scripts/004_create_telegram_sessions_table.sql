-- Create table for storing Telegram session strings (encrypted)
CREATE TABLE IF NOT EXISTS telegram_sessions (
  id INTEGER PRIMARY KEY DEFAULT 1,
  session_string TEXT NOT NULL, -- Encrypted session string
  phone_number TEXT, -- Optional: store phone number for reference
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT single_row CHECK (id = 1)
);

-- Enable Row Level Security
ALTER TABLE telegram_sessions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations
CREATE POLICY "Allow all operations on telegram_sessions" 
ON telegram_sessions 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_telegram_sessions_id ON telegram_sessions(id);

