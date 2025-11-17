-- Add channel_username column to channels table if it doesn't exist
ALTER TABLE public.channels 
ADD COLUMN IF NOT EXISTS channel_username TEXT;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_channels_username ON public.channels(channel_username);

-- Make it unique if not already
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'channels_channel_username_key'
    ) THEN
        ALTER TABLE public.channels 
        ADD CONSTRAINT channels_channel_username_key UNIQUE (channel_username);
    END IF;
END $$;

