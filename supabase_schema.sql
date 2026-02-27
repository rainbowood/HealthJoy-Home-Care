-- HealthJoy Home Care - Supabase Database Schema
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)

-- 1. Contact Inquiries (from /contact page)
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Care Requests (from /get-started page)
CREATE TABLE IF NOT EXISTS care_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  care_for TEXT NOT NULL,
  support_type TEXT,
  best_time TEXT,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Job Applications (from /apply page)
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  gender TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  position TEXT,
  experience TEXT,
  drivers_license TEXT,
  certificates TEXT[] DEFAULT '{}',
  languages TEXT[] DEFAULT '{}',
  skills TEXT[] DEFAULT '{}',
  cover_letter TEXT,
  resume_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (recommended)
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE care_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert (backend uses service role key)
CREATE POLICY "Service role can insert contact_inquiries" ON contact_inquiries
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Service role can select contact_inquiries" ON contact_inquiries
  FOR SELECT USING (true);

CREATE POLICY "Service role can insert care_requests" ON care_requests
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Service role can select care_requests" ON care_requests
  FOR SELECT USING (true);

CREATE POLICY "Service role can insert job_applications" ON job_applications
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Service role can select job_applications" ON job_applications
  FOR SELECT USING (true);

-- 5. Support Enquiries (from /support-at-home page)
CREATE TABLE IF NOT EXISTS support_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  service_type TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE support_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert support_enquiries" ON support_enquiries
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Service role can select support_enquiries" ON support_enquiries
  FOR SELECT USING (true);

-- 4. Storage Setup (Resumes)
-- Create the bucket if it doesn't exist (Note: Storage is in its own schema)
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Policies to allow uploads to the resumes bucket
-- These policies are applied to the storage.objects table
CREATE POLICY "Allow public upload" ON storage.objects
  FOR INSERT TO public WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Allow public read" ON storage.objects
  FOR SELECT TO public USING (bucket_id = 'resumes');
