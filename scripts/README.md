# Secure Scripts Setup

This folder contains scripts for database operations using secure environment variables.

## Setup

1. **Create your .env file** in the project root (not in this scripts folder):
   ```bash
   cp .env.example .env
   ```

2. **Add your Supabase keys** to the .env file:
   - `VITE_SUPABASE_URL` - Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` - Your public anon key (safe for frontend)
   - `SUPABASE_SERVICE_ROLE_KEY` - Your service role key (keep secret!)

3. **Find your keys** in Supabase Dashboard:
   - Go to Settings → API
   - Copy the URL and keys

## Usage

### For read operations (uses anon key):
```javascript
import { createSupabaseClient } from './supabase-admin.mjs';
const supabase = createSupabaseClient();
```

### For admin operations (uses service role key):
```javascript
import { createSupabaseAdmin } from './supabase-admin.mjs';
const supabase = createSupabaseAdmin();
```

## Security Notes

- ⚠️ **NEVER** commit the .env file to version control
- ⚠️ **NEVER** share your service role key
- ✅ The anon key is safe to use in frontend code
- ✅ Use service role key only in backend/scripts

## Running Scripts

```bash
# Update module 9 title (requires service role key)
node scripts/update-module-secure.mjs

# Example script showing both methods
node scripts/example-secure-script.mjs
```