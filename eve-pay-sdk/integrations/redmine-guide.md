# Redmine Integration Guide

## Step 1 — Add button
Use ERP/API call to POST /payments/init

## Step 2 — Store external_ref
Bind payment_reference to task ID

## Step 3 — Confirm payment
POST /payments/confirm

## Step 4 — Ledger sync
Use Supabase/SQL connector (optional)

