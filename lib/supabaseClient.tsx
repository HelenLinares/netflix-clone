import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yokhscnsiptgncxhznfg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlva2hzY25zaXB0Z25jeGh6bmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1ODA2OTUsImV4cCI6MjA5NTE1NjY5NX0.iA7Wo5SawzDK7FWyU6cDSyvW4MGFHY5fBQWE1fQDKRs';

export const supabase = createClient(supabaseUrl, supabaseKey);