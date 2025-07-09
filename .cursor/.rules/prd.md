# TweetWriter Boilerplate - Product Requirements Document (PRD)

## 🎯 Project Vision

Create a comprehensive, production-ready Next.js boilerplate that eliminates repetitive setup tasks for new projects. This boilerplate should provide authentication, database integration, UI components, AI capabilities, and payment processing out of the box.

## 🚀 Project Objectives

- **Primary Goal**: Build a reusable boilerplate that requires minimal configuration for new projects
- **Time Savings**: Reduce project setup time from days to minutes
- **Best Practices**: Implement industry-standard patterns and security practices
- **Scalability**: Architecture that supports growth from MVP to production scale

## 🏗️ Technical Architecture

### Core Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **API Layer**: tRPC v11 for type-safe APIs
- **Database**: Neon.tech (PostgreSQL) with Prisma ORM
- **Authentication**: Better Auth with Google OAuth only
- **UI Framework**: shadcn/ui (complete component library)
- **Styling**: Tailwind CSS
- **AI Integration**: Vercel AI SDK
- **Payments**: Polar.sh integration
- **State Management**: React Query (TanStack Query)
- **Validation**: Zod schemas

## 📋 Feature Requirements

### 1. Authentication System

**Provider**: Better Auth

- **OAuth Integration**: Google Sign-in/Sign-up only
- **No Traditional Auth**: No email/password authentication
- **Session Management**: Secure session handling
- **User Profile**: Basic user information from Google
- **Protected Routes**: Middleware for route protection
- **Logout Functionality**: Clean session termination

**User Flow**:

1. User visits landing page
2. Clicks "Sign in with Google"
3. Google OAuth flow
4. Redirect to dashboard on success
5. Session persists across browser sessions

### 2. Database Integration

**Provider**: Neon.tech (Serverless PostgreSQL)

- **ORM**: Prisma with full TypeScript support
- **Schema Design**:
  - Users table (Google profile data)
  - Sessions table (Better Auth)
  - Products/Subscriptions (Polar.sh integration)
  - Extensible schema for future features
- **Migrations**: Automated database migrations
- **Connection Pooling**: Optimized for serverless

### 3. User Interface

**Component Library**: shadcn/ui (ALL components installed)

- **Dashboard Layout**: Clean, responsive sidebar layout
- **Navigation**: Collapsible sidebar with menu items
- **Theme Support**: Light/Dark mode toggle
- **Responsive Design**: Mobile-first approach
- **Loading States**: Skeleton loaders and spinners
- **Error Boundaries**: Graceful error handling

**Dashboard Structure**:

```
├── Sidebar Navigation
│   ├── Dashboard (Home)
│   ├── Profile
│   ├── Billing
│   ├── Settings
│   └── Logout
├── Main Content Area
│   ├── Header with user info
│   ├── Breadcrumbs
│   └── Page content
```

### 4. AI Integration

**Provider**: Vercel AI SDK

- **Setup**: Complete SDK configuration
- **Streaming Support**: Real-time AI responses
- **Multiple Providers**: OpenAI, Anthropic ready
- **Rate Limiting**: Built-in request throttling
- **Error Handling**: Graceful AI service failures
- **Usage Tracking**: Monitor AI API consumption

### 5. Payment Processing

**Provider**: Polar.sh

- **Subscription Management**: Recurring billing
- **Product Catalog**: Dynamic product loading
- **Webhook Handling**: Secure payment event processing
- **Customer Portal**: Self-service billing management
- **Usage-Based Billing**: Support for metered billing
- **Tax Handling**: Automatic tax calculation

### 6. Developer Experience

**Configuration Management**:

- **Environment Variables**: Comprehensive .env.example
- **Type Safety**: Full TypeScript coverage
- **Code Quality**: ESLint + Prettier configuration
- **Git Hooks**: Pre-commit validation
- **Documentation**: Inline code documentation

## 🔧 Configuration Requirements

### Environment Variables (.env.local)

```env
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication (Better Auth)
BETTER_AUTH_SECRET="..."
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
BETTER_AUTH_URL="http://localhost:3000"

# AI Integration
OPENAI_API_KEY="..."
ANTHROPIC_API_KEY="..."

# Payments (Polar.sh)
POLAR_ACCESS_TOKEN="..."
POLAR_WEBHOOK_SECRET="..."
POLAR_ORGANIZATION_ID="..."

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Quick Start Checklist

When starting a new project with this boilerplate:

1. ✅ Clone repository
2. ✅ Update `.env.local` with your API keys
3. ✅ Update Polar.sh product IDs in config
4. ✅ Run database migrations
5. ✅ Deploy to Vercel
6. ✅ Configure production environment variables

## 📊 Success Metrics

- **Setup Time**: < 15 minutes for new project
- **Type Safety**: 100% TypeScript coverage
- **Performance**: Lighthouse score > 90
- **Security**: No critical vulnerabilities
- **Maintainability**: Clear code structure and documentation

## 🔒 Security Requirements

- **Authentication**: Secure OAuth implementation
- **Session Management**: HttpOnly cookies, CSRF protection
- **API Security**: Rate limiting, input validation
- **Database**: Parameterized queries, connection security
- **Environment**: Secure secret management
- **HTTPS**: Force HTTPS in production

## 🚀 Deployment Strategy

- **Platform**: Vercel (optimized for Next.js)
- **Database**: Neon.tech (serverless PostgreSQL)
- **CDN**: Vercel Edge Network
- **Monitoring**: Built-in Vercel analytics
- **Scaling**: Automatic serverless scaling

## 📚 Documentation Requirements

- **README**: Comprehensive setup guide
- **API Documentation**: tRPC procedure documentation
- **Component Library**: shadcn/ui usage examples
- **Deployment Guide**: Step-by-step deployment instructions
- **Troubleshooting**: Common issues and solutions

## 🎨 Design System

- **Colors**: Consistent color palette with CSS variables
- **Typography**: Readable font hierarchy
- **Spacing**: Consistent spacing scale
- **Components**: Reusable, accessible components
- **Icons**: Lucide React icon library
- **Animations**: Subtle, performant animations

## 🧪 Testing Strategy

- **Unit Tests**: Critical business logic
- **Integration Tests**: API endpoints
- **E2E Tests**: User authentication flow
- **Type Checking**: Strict TypeScript validation
- **Linting**: Code quality enforcement

## 📈 Future Extensibility

- **Modular Architecture**: Easy to add new features
- **Plugin System**: Support for additional integrations
- **Multi-tenant**: Architecture supports multi-tenancy
- **Internationalization**: i18n ready structure
- **Mobile App**: API-first design for mobile integration

## 🎯 Acceptance Criteria

- [ ] Google OAuth authentication working
- [ ] Dashboard with sidebar navigation
- [ ] All shadcn/ui components installed
- [ ] Neon.tech database connected
- [ ] Prisma ORM configured
- [ ] Vercel AI SDK integrated
- [ ] Polar.sh payment processing
- [ ] Type-safe tRPC APIs
- [ ] Responsive design
- [ ] Production deployment ready
- [ ] Comprehensive documentation
- [ ] Environment variable configuration
- [ ] Quick start guide (< 15 minutes setup)

## 🔄 Maintenance Plan

- **Dependencies**: Regular updates and security patches
- **Documentation**: Keep documentation current
- **Examples**: Maintain working code examples
- **Community**: Support for common use cases
- **Versioning**: Semantic versioning for releases
