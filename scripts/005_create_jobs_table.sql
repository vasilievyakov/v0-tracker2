-- Create table for storing background jobs
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_type TEXT NOT NULL, -- 'add_channel', 'update_channel', etc.
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed'
  payload JSONB NOT NULL, -- Job-specific data (e.g., { channelUrl, timeRange })
  result JSONB, -- Result data after completion
  error_message TEXT, -- Error message if failed
  attempts INTEGER DEFAULT 0, -- Number of processing attempts
  max_attempts INTEGER DEFAULT 3, -- Maximum retry attempts
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "jobs_select_all"
  ON jobs FOR SELECT
  USING (true);

CREATE POLICY "jobs_insert_authenticated"
  ON jobs FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "jobs_update_authenticated"
  ON jobs FOR UPDATE
  TO authenticated
  USING (true);

-- Create indexes for efficient job processing
CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);
CREATE INDEX IF NOT EXISTS idx_jobs_type ON jobs(job_type);
CREATE INDEX IF NOT EXISTS idx_jobs_created_at ON jobs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_jobs_status_created ON jobs(status, created_at);

