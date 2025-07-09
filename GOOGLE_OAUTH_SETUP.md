# Google OAuth Setup Guide

This guide will help you set up Google OAuth for your Moustafa Boilerplate project.

## 🚀 Quick Setup Steps

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API (or Google Identity API)

### 2. Configure OAuth Consent Screen

1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose **External** user type
3. Fill in the required information:
   - **App name**: Moustafa Boilerplate
   - **User support email**: Your email
   - **Developer contact information**: Your email
4. Add scopes (optional for basic setup)
5. Save and continue

### 3. Create OAuth 2.0 Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **OAuth 2.0 Client IDs**
3. Choose **Web application**
4. Configure:
   - **Name**: Moustafa Boilerplate Web Client
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (for development)
     - `https://yourdomain.com` (for production)
   - **Authorized redirect URIs**:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - `https://yourdomain.com/api/auth/callback/google` (for production)

### 4. Update Environment Variables

Copy the Client ID and Client Secret from Google Cloud Console and update your `.env.local`:

```env
# Authentication (Better Auth)
BETTER_AUTH_SECRET="your-super-secret-key-here-minimum-32-characters-long"
BETTER_AUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-actual-google-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-actual-google-client-secret"

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Moustafa Boilerplate"
```

### 5. Generate a Secure Secret

For `BETTER_AUTH_SECRET`, generate a secure random string (minimum 32 characters):

```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Using OpenSSL
openssl rand -hex 32

# Or use any password generator with 32+ characters
```

## 🧪 Testing the Setup

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000`
3. Click the **Login** button
4. You should be redirected to `/signin`
5. Click **Continue with Google**
6. Complete the Google OAuth flow
7. You should be redirected to `/dashboard`

## 🔧 Troubleshooting

### Common Issues:

1. **"redirect_uri_mismatch" error**
   - Make sure your redirect URI in Google Cloud Console matches exactly
   - Check for trailing slashes and http vs https

2. **"invalid_client" error**
   - Verify your Client ID and Client Secret are correct
   - Make sure there are no extra spaces in your environment variables

3. **"access_denied" error**
   - Check your OAuth consent screen configuration
   - Make sure your app is not in testing mode with restricted users

### Development vs Production:

- **Development**: Use `http://localhost:3000`
- **Production**: Use your actual domain with `https://`

## 📝 Environment Variables Reference

```env
# Required for Better Auth
BETTER_AUTH_SECRET="32+ character random string"
BETTER_AUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database (already configured)
DATABASE_URL="your-neon-database-url"
DIRECT_URL="your-neon-direct-url"
```

## 🚀 Ready to Go!

Once you've completed these steps, your authentication system will be fully functional with:

- ✅ Google OAuth sign-in
- ✅ Secure session management
- ✅ Protected dashboard routes
- ✅ User profile information
- ✅ Sign-out functionality

Your boilerplate is now ready for Phase 3! 🎉
