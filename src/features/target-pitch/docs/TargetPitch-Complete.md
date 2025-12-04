# TargetPitch.ai — Complete Product Requirements & Strategy Document

**Version:** 3.2 (Unified)  
**Date:** December 4, 2025  
**Status:** Ready for Development  
**Document Owner:** Product Team

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Market & Opportunity](#2-market--opportunity)
3. [Product Vision](#3-product-vision)
4. [Monetization Strategy](#4-monetization-strategy)
5. [Core Technical Architecture](#5-core-technical-architecture)
6. [MVP Scope](#6-mvp-scope)
7. [User Journey](#7-user-journey)
8. [Go-to-Market Strategy](#8-go-to-market-strategy)
9. [Success Metrics](#9-success-metrics)
10. [Roadmap](#10-roadmap)
11. [Risks & Mitigation](#11-risks--mitigation)
12. [Infrastructure & Deployment](#12-infrastructure--deployment)
13. [Glossary](#13-glossary)
14. [Appendices](#14-appendices)

---

## 1. Executive Summary

**TargetPitch.ai** — AI-powered platform для автоматизации создания высокоэффективных, персонализированных презентаций за минуты вместо дней. Используем динамический выбор LLM моделей в зависимости от типа и сложности контента, с гибкой монетизацией (free + tokens + корпоративная подписка).

### Core Value Proposition

- ⚡ **Скорость**: от идеи до готовой презентации — 5-10 минут вместо 3-7 дней
- 🎯 **Персализация**: AI анализирует контекст и целевую аудиторию, генерирует продающий контент
- 🎨 **Качество**: Динамический выбор LLM оптимизирует результат под тип задачи
- 📊 **Гибкость**: Применимо для sales pitches, technical presentations, internal presentations
- 💼 **Масштабируемость**: Три монетизации (free → tokens → corporate subscription)

### Problems Solved

1. **Время**: Sales teams, tech leads, product managers тратят дни на подготовку presentations
2. **Дизайн**: нужны дизайнеры для создания брендированных колод
3. **Content creation**: нужны копирайтеры или подготовка контента вручную
4. **Масштабируемость**: сложно масштабировать personalized presentations

---

## 2. Market & Opportunity

### Target Audience (Primary Personas for MVP)

#### 1. **Sales Development Representatives (SDRs)** ⭐ PRIMARY

- **Profile**: Sales professionals в B2B компаниях, ищущие new leads
- **Pain**: готовят 10-20 питчей в неделю, каждый вручную
- **Willingness to pay**: $30-100/месяц (бюджет ограничен)
- **Usage**: 5-10 presentations в неделю
- **LLM preference**: Claude (reasoning), GPT-4o (speed)
- **Conversion likelihood**: HIGH

#### 2. **Account Executives (AEs)** ⭐ PRIMARY

- **Profile**: Senior sales с 5-15 летним стажем, large deals
- **Pain**: нужны кастомные deck'и для каждого prospect
- **Willingness to pay**: $100-300/месяц
- **Usage**: 20-30 presentations в месяц
- **Conversion likelihood**: MEDIUM-HIGH

#### 3. **Engineering Managers & Tech Leads** ⭐ PRIMARY

- **Profile**: Engineering leaders presenting to teams, stakeholders
- **Pain**: нужны быстрые presentations, время вместо кодирования
- **Willingness to pay**: $50-150/месяц (компания платит)
- **Usage**: 3-8 presentations в месяц (high complexity)
- **LLM preference**: Claude (technical), Mistral (code examples)
- **Conversion likelihood**: HIGH

#### 4. **Product Managers** ⭐ PRIMARY

- **Profile**: Product leaders presenting roadmaps, strategies
- **Pain**: быстро нужны presentations для stakeholders, board, teams
- **Willingness to pay**: $75-200/месяц (компания платит)
- **Usage**: 5-15 presentations в месяц
- **Conversion likelihood**: MEDIUM-HIGH

#### 5. **Business Development Managers (BDMs)**

- **Profile**: Corporate development, strategic partnerships
- **Pain**: нужны presentations для partnership proposals
- **Willingness to pay**: $200-500/месяц
- **Usage**: 3-5 presentations в неделю
- **Conversion likelihood**: MEDIUM

#### 6. **Founders & Startup Entrepreneurs**

- **Profile**: Founders preparing investor pitches
- **Pain**: нужна быстрая, professional дека
- **Willingness to pay**: $50-200/месяц (периодичная)
- **Usage**: burst pattern перед fundraising
- **Conversion likelihood**: MEDIUM

### Market Size Estimation (Russian Focus)

- **Target Market**:
  - ~50K-100K active SDRs + AEs в России
  - ~30K-50K Engineering managers + Tech leads
  - ~20K-30K Product managers
  - **Total TAM: ~100-180K professionals**
- **Immediate TAM**: $4-8M annual при $40-50 ARPU
- **Timing**: Sales automation + AI adoption + internal presentations trending
- **Seasonality**: Спрос выше в начале квартала

### Why Russia as Starting Market

- ✅ High AI adoption in tech/sales communities
- ✅ Tech-savvy audience (comfort with SaaS)
- ✅ Lower CAC vs Western markets
- ✅ Local payment methods (Yookassa)
- ✅ Familiarity with market (regulatory, competitors)

### Competitive Landscape

- **Direct competitors**: Beautiful.ai, Gamma.app, Pitchdeck.com (generic, slow)
- **Indirect**: PowerPoint, Google Slides, Figma (time-consuming)
- **Our edge**:
  - **Dynamic LLM routing** (different models for different tasks)
  - Speed + AI quality + simplicity
  - Three monetization tiers (unique positioning)

---

## 3. Product Vision

### What We're Building

Platform, которая за счет AI (token reselling + dynamic LLM routing) автоматизирует создание высококачественных presentations путем:

1. Сбора контекста от пользователя через простую форму
2. **Анализа типа презентации** (sales pitch / technical / strategic / team update)
3. **Выбора оптимальной LLM** в зависимости от типа
4. Отправки контекста в выбранный LLM (OpenAI, Claude, Mistral)
5. Парсинга структурированного ответа и заполнения React-компонентов слайдов
6. Публикации готовой presentation'ы на брендированный поддомен
7. Опционального обогащения контента OSINT-данными (платный апсел, только для sales)

---

## 4. Monetization Strategy

### 4.1 Three Parallel Revenue Streams

TargetPitch.ai поддерживает три монетизации, работающие вместе:

```
┌─────────────────────────────────────────────────────┐
│ Free Tier (1 presentation/month)                    │
│ - Activation + network effect                       │
│ - 80-90% users START here                           │
└──────────┬──────────────────────────┬───────────────┘
           │                          │
    ┌──────▼────────┐         ┌───────▼──────────────┐
    │ Individual    │         │ Corporate          │
    │ (Token-based) │         │ (Subscription)     │
    │               │         │                    │
    │ $5/$25/$99    │         │ $99-$5K/month     │
    │ Pay-as-you-go │         │ Team/Enterprise   │
    │ 10% conv      │         │ 5-10% conversion  │
    │ $200-300 LTV  │         │ $10K-100K LTV     │
    └──────┬────────┘         └───────┬────────────┘
           │                          │
           └──────────┬───────────────┘
                      │
             ┌────────▼─────────┐
             │ Combined Revenue │
             │ 85%+ margin      │
             │ Highly scalable  │
             └──────────────────┘
```

### 4.2 Tier 1: Free

```
Free:
  - 1 presentation/month (~3-5K tokens equivalent)
  - Standard form
  - 30 days retention
  - No login required
  - Email-only tracking
```

**Purpose**: Activation, word-of-mouth, conversion funnel

### 4.3 Tier 2: Token-Based (Primary for Individuals & SMBs)

#### Pricing

```
Token Packs:
  - $5 → 15,000 tokens (1-2 presentations)
  - $25 → 100,000 tokens (10-15 presentations) [+10% bonus]
  - $99 → 500,000 tokens (50-100 presentations) [+20% bonus]

Cost per presentation (average):
  - Sales pitch: ~6,000 tokens
  - Technical: ~7,000 tokens
  - Strategic: ~8,000 tokens
  - OSINT enriched: +30% tokens

Our economics:
  - We pay LLM: ~$0.003 per 1K tokens
  - We charge user: ~$0.33 per 1K tokens
  - Margin: ~90%
```

#### User Personas

- Solo SDRs ($30-100/month spend)
- Freelance consultants ($50-150/month)
- Founders ($50-200/month, bursty)
- Small agencies ($200-500/month)

### 4.4 Tier 3: Corporate Subscription ⭐

#### Corporate Target Personas

**A. Mid-Market B2B SaaS Companies (50-300 employees)**

- Departments: Sales (10-30), Marketing (5-15), Product (3-10)
- Annual spend: $2,000-8,000/year
- Usage: 200-500 presentations/month
- Decision maker: VP Sales, CMO, VP Product

**B. Sales-Heavy Enterprises (1000+ employees)**

- Departments: Sales (100-500), Customer Success
- Annual spend: $10,000-50,000/year
- Usage: 1000-5000 presentations/month
- Decision maker: VP Sales, CRO

**C. Consulting Firms & Agencies**

- Usage: 300-1000 presentations/month
- Pain: Client branding (white-label), speed
- Annual spend: $5,000-25,000/year

**D. Internal Corporate Teams**

- HR, Finance, Operations, Comms
- Annual spend: $2,000-8,000/year
- Usage: 100-300 presentations/month (internal)

#### Corporate Subscription Tiers

**Team Starter — $99/month ($990/year)**

- 50 presentations/month (shared quota)
- 5 user accounts
- 1 brand profile
- Basic analytics (usage only)
- Email support (24hr)
- Target: Early adopters, bootstrap companies

**Team Professional — $299/month ($2,990/year) ⭐ RECOMMENDED**

- 250 presentations/month (shared)
- 25 user accounts
- **Unlimited brand profiles** (multiple brands/contexts)
- Advanced analytics:
  - Presentation performance (views, downloads, shares)
  - Team member usage breakdown
  - Content performance metrics
- Priority support (4hr response)
- **Salesforce integration** (1-way: generate from pipeline)
- **Custom templates** (3 per brand)
- Usage alerts
- Target: Growing mid-market teams

**Enterprise — Custom pricing ($5,000-50,000+/year)**

- **Unlimited presentations**
- Unlimited brand profiles & users
- White-label option (custom domain, no TargetPitch branding)
- **API access** (programmatic generation)
- **Compliance & Security**:
  - SOC 2 Type II
  - SSO (SAML/OAuth)
  - Data residency (EU/US choice)
  - Audit logs & compliance reports
  - Custom retention policies
- **Advanced integrations**:
  - Salesforce (read/write)
  - HubSpot, Slack, Teams
  - Custom webhooks
- **Dedicated support**:
  - Account manager
  - 1-hour response time
  - Monthly business reviews
  - Training for up to 50 people
- **Advanced analytics**:
  - Board-ready dashboards
  - Forecasting (predict conversions)
  - ROI tracking
- Target: Enterprise, agencies, consulting firms

### 4.5 Blended Revenue Model (Month 12 Projection)

```
Individual (Token-based):
  - 500 monthly active users
  - 2% are paid ($25/month avg)
  - 10 paid users × $25 = $250/month

Corporate (Subscription-based):
  - 5 corporate accounts
  - Mix: 2× Team Starter ($99), 2× Team Professional ($299), 1× Enterprise ($5K)
  - Corporate revenue: $99×2 + $299×2 + $5000 = $5,696/month

Total MRR: $250 + $5,696 = $5,946/month (~$71K annual)

KEY INSIGHT:
  - Corporate tier = only 1% of users
  - But drives 95% of revenue
  - High LTV, sticky customers (>110% NRR potential)
  - This is standard SaaS blended model
```

---

## 5. Core Technical Architecture

### 5.1 Frontend Stack

- **Framework**: Next.js (SSR/SSG for presentations & landing page)
- **Landing page**: Custom Next.js (same codebase)
- **Presentation engine**: Swiper.js (navigation) + custom React components
- **Styling**: Tailwind CSS + CSS-in-JS (emotion/styled-components)
- **PDF Export**: html2canvas (fast) + Puppeteer (quality, Phase 2)
- **Forms**: React Hook Form + Zod (validation)
- **Deployment**: Vercel (frontend + lightweight API routes)

### 5.2 Backend Stack

- **Runtime**: Node.js + Express/NestJS on Railway
- **Job Queue**: Bull (Redis-based) for async presentation processing
- **Cache**: Redis (built into Railway, caching content & OSINT)
- **Database**: PostgreSQL (Railway managed) for presentations, users, tokens
- **Storage**: S3-compatible (DigitalOcean Spaces) for logos, PDFs
- **Deployment**: Railway (all-in-one: Node + PostgreSQL + Redis)

### 5.3 Infrastructure Overview

```
Frontend:
  Vercel (Git-connected auto-deploy)
  Custom domain via Cloudflare DNS

API/Backend:
  Railway (single dashboard for everything)
  - Node.js server
  - PostgreSQL database
  - Redis cache

Storage:
  DigitalOcean Spaces (S3-compatible)

Monitoring:
  Sentry (error tracking)
  Railway dashboard (built-in)

Estimated cost: $60-80/month for MVP
```

### 5.4 LLM Integration (Dynamic Routing) ⭐ KEY INNOVATION

#### Decision Tree Architecture

```
User fills form:
  - Presentation type
  - Content domain (sales/technical/strategic/team)
  - Complexity level (simple/medium/complex)
  - Time constraints (ASAP/standard/quality-first)

System routes to optimal LLM:

  ├─ SALES PITCH
  │  ├─ Simple + ASAP → GPT-4o (fast, good)
  │  ├─ Medium + Standard → Claude 3.5 Sonnet (reasoning, persuasion)
  │  └─ Complex + Quality → Claude 3 Opus (best reasoning)
  │
  ├─ TECHNICAL PRESENTATION
  │  ├─ Architecture → Claude 3 Opus (technical accuracy)
  │  ├─ Roadmap/Strategy → GPT-4o (creative framing)
  │  ├─ Code examples → Mistral Large (cost-effective)
  │  └─ Standup (simple) → GPT-4o (fast)
  │
  ├─ STRATEGIC/PRODUCT
  │  ├─ Investor pitch → Claude 3 Opus (persuasive depth)
  │  ├─ Roadmap announcement → GPT-4o (clarity)
  │  └─ Competitive analysis → Claude 3.5 Sonnet (depth)
  │
  └─ INTERNAL/TEAM
     ├─ Standup/Update → GPT-4o (fast, clear)
     └─ Brainstorm → GPT-4o (creative)
```

#### LLM Provider Comparison

| Provider          | Per 1M Tokens      | Quality       | Speed     | Best For                              |
| ----------------- | ------------------ | ------------- | --------- | ------------------------------------- |
| OpenAI GPT-4o     | $2.50 in / $10 out | Excellent     | Very Fast | Sales (quick), team updates, creative |
| Claude 3.5 Sonnet | $3 in / $15 out    | Excellent     | Fast      | Technical, persuasion, reasoning      |
| Claude 3 Opus     | $3 in / $15 out    | Best-in-class | Medium    | Complex, strategic, depth             |
| Mistral Large     | $2 in / $6 out     | Good          | Very Fast | Code examples, cost-effective         |

**MVP Strategy**:

- Start with GPT-4o (proven, fast, reliable)
- Add Claude as fallback for complex cases
- Let users see which model was used (transparency)

### 5.5 Token Accounting

```
Track per-generation:
- LLM provider used
- Prompt tokens (input)
- Completion tokens (output)
- Total cost to us (API pricing)
- Cost to user (our marked-up price — unified)
- Model quality score (user feedback)

Store in DB:
- presentations.tokens_used
- presentations.llm_provider_used
- presentations.cost_to_us
- user_balances.tokens_spent
- llm_routing_decisions (for optimization)

Unified pricing: User pays same per token regardless of model
(We absorb cost difference to optimize quality)
```

### 5.6 Database Schema (Minimal for MVP)

```postgresql
-- Users (no auth in MVP, just tracking via email)
users
├── id (UUID, primary key)
├── email (string, unique)
├── created_at (timestamp)
└── metadata (JSON)

-- Presentations
presentations
├── id (UUID, primary key)
├── user_email (string, FK)
├── slug (string, unique) — URL: targetpitch.ai/{slug}
├── title (string)
├── company_name (string)
├── presentation_type (enum) — 'sales' | 'technical' | 'strategic' | 'team' | 'other'
├── user_input (JSON)
├── generated_content (JSON) — LLM output
├── rendered_slides (JSON) — React component props
├── brand_data (JSON) — logo, colors
├── llm_provider_used (enum) — 'openai' | 'claude' | 'mistral'
├── tokens_used (integer)
├── cost_to_us (decimal)
├── published_at (timestamp)
├── expires_at (timestamp, nullable)
├── view_count (integer)
├── export_count (integer)
└── metadata (JSON)

-- Token Balances
token_balances
├── user_email (string, PK)
├── balance (bigint)
├── total_purchased (bigint)
├── total_spent (bigint)
├── last_purchase_date (timestamp)
├── updated_at (timestamp)
└── subscriptions (JSON)

-- Transactions
token_transactions
├── id (UUID)
├── user_email (string)
├── amount (integer)
├── type (enum) — 'purchase' | 'spend' | 'refund' | 'promo'
├── presentation_id (UUID, nullable)
├── llm_provider (enum, nullable)
├── created_at (timestamp)
└── metadata (JSON)
```

### 5.7 OSINT Integration (Paid Add-on, Sales-only, Phase 2+)

```
Only available for SALES PITCH presentations

User specifies: Company name OR INN OR Website
If enabled (paid extra):
  1. Fetch from:
     - ЕГРЮЛ (free, public API)
     - 2ГИС (free tier)
     - Яндекс Карты (free)
     - Basic web scraping

  2. Aggregate: company info, reviews, decision makers

  3. Inject into LLM prompt:
     "Here's what we know about target company: [data]
      Make sales pitch addressing their specific needs"

  4. Cost: +30% tokens

MVP Approach: Don't build in v1 — too complex
- Marketing: "OSINT enhancement coming Q1 2025!"
- Collect demand on landing page
- Build in Phase 2
```

### 5.8 PDF Generation Strategy

#### Fast Path (Instant) ⭐ MVP APPROACH

```
Tech: html2canvas (client-side) + jsPDF
When: Default export
Speed: < 1 second
Quality: 75-80% (good for most)
Cost: Free (client-side)

User experience: Click "Download PDF" → instant download
```

#### Quality Path (Async, Phase 2)

```
Tech: Puppeteer (headless browser, server-side)
When: User clicks "Professional PDF"
Speed: 30-60 seconds (async, email delivery)
Quality: 95%+ (pixel-perfect)
Cost: ~$0.01 per PDF

User experience: Check "Professional PDF" → async processing → email link
```

---

## 6. MVP Scope (Phase 1: 6-8 weeks)

### 6.1 In Scope ✅

1. **Landing page** (custom Next.js):
   - Hero: "Presentations in 5 minutes"
   - Demo video (30 sec)
   - Pain points + How it works
   - Pricing (Free + token packs)
   - CTA, FAQ, social proof

2. **Simple form** (no login):
   - User info: name, email, company, logo, brand color
   - Presentation type: Sales / Technical / Strategic / Team / Other
   - Context: description, pain points
   - Validation & error handling

3. **LLM integration** with dynamic routing:
   - Route to OpenAI GPT-4o (default)
   - Fallback to Claude (if needed)
   - Track which model used
   - Structured JSON output

4. **React presentation renderer**:
   - Flexible slide components
   - Dynamic branding (logo, colors)
   - Swiper.js navigation
   - Responsive design

5. **Published presentations**:
   - Public URLs: `targetpitch.ai/presentations/{slug}`
   - No auth to view
   - Share link copy
   - View counter
   - QR code

6. **PDF export** (html2canvas):
   - One-click download
   - Instant generation

7. **Token purchasing** (Yookassa):
   - Token pack selection
   - Secure payment
   - Instant balance update

8. **Analytics** (basic):
   - View count
   - Download count
   - Token spend tracking

### 6.2 Out of Scope ❌ (Phase 2+)

- User authentication & full dashboard
- Presentation history / editing
- OSINT integration
- Telegram Mini App / Bot
- CRM integrations
- Professional PDF generation (Puppeteer)
- White-label
- Custom templates

---

## 7. User Journey (MVP)

```
Landing on targetpitch.ai
         ↓
Reads hero + demo + pricing
         ↓
Clicks "Try Free"
         ↓
Fills form (1-2 minutes):
  1. Your info: name, email, company, logo, color
  2. Presentation type: Sales / Technical / Roadmap / Other
  3. Context: what you need, pain points
         ↓
Clicks "Generate"
         ↓
[BACKEND] Async job:
  1. Analyze type + context
  2. Route to optimal LLM (GPT-4o or Claude)
  3. Build tailored prompt
  4. Call LLM (stream, deduct tokens)
  5. Parse JSON
  6. Render React components
  7. Publish to /presentations/{slug}
         ↓
Loading state (30-60 sec)
         ↓
Redirect to: targetpitch.ai/presentations/{slug}
         ↓
User sees presentation:
  ├─ Header: their logo + title
  ├─ Slides: 3-15 dynamic slides
  ├─ Navigation: arrows + keyboard
  ├─ Actions:
  │  ├─ Download PDF (instant)
  │  ├─ Copy link
  │  ├─ QR code
  │  └─ "Buy tokens for next?" CTA
         ↓
User shares link or downloads PDF
```

---

## 8. Go-to-Market Strategy

### 8.1 Phase 1: Landing Page + Beta (Weeks 1-4)

#### Landing Page (Custom Next.js)

```
Structure:
  1. Hero: "Get a Custom Presentation in 5 Minutes"
  2. Social proof: "Used by teams at [companies]"
  3. Problems: Sales / Tech personas separately
  4. How it works (3 steps with visuals)
  5. Pricing (Free + tokens)
  6. FAQ: models, time, edits, privacy, payment
  7. CTA: "Try Free" + "Learn More"
```

#### Beta Recruitment (30-50 users)

```
Channels:
  1. Direct LinkedIn outreach (2-3 degree connections)
  2. Tech Slack communities
  3. Habr: "Created AI presentation generator, seeking beta testers"
  4. Telegram tech channels
  5. GitHub discussions

Incentive: Free tokens for 1 month + early access

Success: 30+ recruited, 50+ presentations, NPS > 40
```

### 8.2 Phase 2: Paid Launch + Yandex.Direkt (Weeks 5-8)

#### Yandex.Direkt Campaign

```
Budget: $500-1000/month testing

Keywords (Russian):
  - "генератор презентаций AI"
  - "создать презентацию быстро"
  - "AI презентации для продаж"
  - "presentation generator russian"
  - "питч дек AI"
  - "презентация за 5 минут"

Ad copy:
  Sales: "Создавайте питч деки в 5 минут, не дней"
  Tech: "Презентации за минуты, не часы. Кодьте вместо создания слайдов"

Landing: Direct to form (minimal friction)
Conversion target: 5-10% form fill → presentation
Expected CTR: 3-5%
```

#### Organic Growth (Parallel)

```
Content:
  - Blog: "5 mistakes in sales pitches" (SEO)
  - Blog: "How to structure technical presentation" (educational)
  - Habr: "We built AI presentation tool, here's what happened"
  - Twitter/X: sales tips, presentation design, AI use cases

Early adopter stories:
  - Interview 5-10 beta users
  - Write case studies
  - Get testimonials

Community:
  - Respond in tech communities
  - Share resources
  - Cold outreach to micro-influencers
```

### 8.3 Phase 3: Validation & Iteration (Weeks 9-12)

```
Track metrics:
  - Landing traffic: 2K-5K/week
  - Landing conversion: > 10%
  - Form completion: > 80%
  - Free-to-paid: 2-5%
  - CAC: < $15

If GOOD (> 10% landing conv):
  - Scale Yandex.Директ 2-3x
  - Launch Google Ads
  - Referral program

If POOR (< 5%):
  - A/B test landing copy
  - Interview drop-offs
  - Pivot messaging
```

---

## 9. Success Metrics (MVP)

### 9.1 Acquisition Metrics

- **Landing traffic**: 2K-3K/week by week 8
- **Landing conversion**: > 10% (form clicks)
- **Form completion**: > 80%
- **CAC**: < $15 (Yandex.Direkt + organic)

### 9.2 Activation Metrics

- **Time to first presentation**: < 10 minutes
- **Generation success rate**: > 95%
- **Generation time**: < 90 seconds
- **User satisfaction**: > 4.5/5

### 9.3 Engagement Metrics

- **PDF download rate**: > 40%
- **Share rate**: > 20%
- **Return usage**: 5-10% of free users make 2nd presentation

### 9.4 Monetization Metrics

- **Free-to-paid conversion**: 2-5%
- **MRR week 8**: $500-1000
- **Average token spend per paid user**: $20-40/month
- **CAC payback**: < 90 days

### 9.5 Quality Metrics

- **LLM content relevance**: > 4/5 stars
- **Presentation professionalism**: > 4.5/5
- **Error rate**: < 2% (failed generations)

---

## 10. Roadmap

### Phase 1: MVP Launch (Weeks 1-8)

**Goal**: Validate PMF, establish product-market fit

- Landing page (custom Next.js)
- Form + LLM dynamic routing
- Presentation publishing
- PDF export (html2canvas)
- Token purchasing (Yookassa)
- Vercel + Railway deployment
- Beta user recruitment & testing

**Success criteria**:

- 50-100 presentations generated
- 2-5% free-to-paid conversion
- $500-1000 MRR
- > 4 NPS from early adopters

### Phase 2: Dashboard & Auth (Weeks 9-16)

**Goal**: Enable repeat usage, retention

- User authentication (email-first)
- Dashboard: presentation history
- Presentation editing (slide tweaks)
- Usage analytics
- OSINT basic (sales presentations)
- Professional PDF (Puppeteer async)

**Success criteria**:

- 30%+ repeat usage
- $2-3K MRR
- Positive testimonials + case studies

### Phase 3: Integrations & Community (Weeks 17-24)

**Goal**: Expand distribution, partnerships

- Telegram Mini App
- HubSpot CRM integration
- Advanced OSINT (paid add-on)
- Template marketplace
- API for partners
- Referral program

**Success criteria**:

- $5-10K MRR
- 500+ active users
- Strategic partnerships

### Phase 4: Telegram Bot & Scale (Weeks 25-32)

**Goal**: Reach professionals in workflow

- Telegram Bot (@targetpitch_bot)
- Slack integration
- Advanced analytics & recommendations
- A/B testing presentations
- White-label for agencies

**Success criteria**:

- $20-50K MRR
- 2000+ active users
- Enterprise conversations

### Phase 5: Enterprise & Optimization (Month 9+)

**Goal**: Enterprise revenue, AI optimization

- Self-hosted/on-premise option
- Fine-tuned LLMs
- Industry-specific features
- Enterprise support & SLA
- Forecasting features

---

## 11. Risks & Mitigation

| Risk                                  | Impact                       | Likelihood | Mitigation                                                   |
| ------------------------------------- | ---------------------------- | ---------- | ------------------------------------------------------------ |
| **LLM quality inconsistency**         | Bad presentations hurt brand | Medium     | Prompt engineering, feedback loop, A/B testing models        |
| **Token cost overruns**               | Margins erode                | Medium     | Monitor per-model cost, switch cheaper if needed, caching    |
| **Yandex.Direkt inefficiency**        | CAC too high                 | Medium     | Keyword testing, landing A/B tests, pivot to organic         |
| **Market adoption slower**            | Not enough users             | Medium     | Test other personas (tech leads promising), adjust messaging |
| **Competition enters**                | Price war, saturation        | Low        | Speed to market, community building, stay focused            |
| **Infrastructure costs scale**        | Expensive at scale           | Medium     | Keep html2canvas for MVP, lazy-load Puppeteer Phase 2        |
| **LLM API rate limits**               | Unavailability               | Low        | Fallback providers, queue management, batching               |
| **Payment issues (Yookassa)**         | Revenue blocked              | Low        | Test early, backup payment ready (Stripe)                    |
| **Sales cycle longer (Corporate)**    | Delayed revenue              | Medium     | Sell to token power-users first (easier conversion)          |
| **Enterprise integration complexity** | Support overload             | Medium     | Robust docs, limit custom integrations Phase 1               |

---

## 12. Infrastructure & Deployment

### 12.1 MVP Infrastructure (Minimal, $60-80/month)

```
Frontend:
  Vercel (free tier or $20/month Pro if needed)
  - Custom domain
  - Auto-deploy from Git
  - Serverless functions

Backend (Railway all-in-one):
  - Node.js Express server
  - PostgreSQL database: $7/month (1GB)
  - Redis cache: included
  - Total Railway: $7-15/month

Storage:
  - DigitalOcean Spaces: $5/month (250GB)
  - Logos, PDFs, exports

Monitoring:
  - Sentry: free tier
  - Railway dashboard: built-in

Payment:
  - Yookassa: 2.9% commission

PDF Generation:
  - html2canvas: client-side (free)
  - Puppeteer: deferred to Phase 2

TOTAL: $60-80/month for 100-500 users
```

### 12.2 Scaling Path (Phase 2+)

```
- Puppeteer serverless (AWS Lambda when volume justifies)
- LLM response caching (reduce token spend 15-25%)
- CDN for presentations (Cloudflare)
- Async PDF generation (queue-based)
- Load testing & auto-scaling
- Custom fine-tuned models (when volume justifies)
```

### 12.3 Payment Setup (Yookassa)

```
Configuration:
  - Integration: REST API
  - Webhooks for payment confirmation
  - Automatic token balance update
  - Receipt emails
  - Refund support

Testing: Yookassa provides test credentials/cards
```

---

## 13. Glossary

- **LLM**: Large Language Model (GPT-4, Claude, Mistral)
- **Token Reselling**: Purchasing LLM API access, reselling to users with markup
- **Dynamic Routing**: Choosing optimal LLM based on presentation type/complexity
- **OSINT**: Open Source Intelligence (public company data)
- **CAC**: Customer Acquisition Cost
- **MRR**: Monthly Recurring Revenue
- **ARR**: Annual Recurring Revenue
- **LTV**: Lifetime Value
- **NRR**: Net Revenue Retention (% revenue retained after churn + expansion)
- **ASP**: Average Selling Price
- **Yookassa**: Russian payment processor (formerly Yandex.Kassa)
- **Railway**: All-in-one backend hosting (DB + Redis + compute)
- **Vercel**: Frontend hosting for Next.js
- **Bull**: Redis-based job queue for async processing
- **Slugs**: URL-friendly identifiers (e.g., "john-smith-sales-pitch-dec-2024")

---

## 14. Appendices

### 14.1 Sample LLM Prompt (Sales Pitch)

```
SYSTEM:
You are an expert sales pitch generator. Create compelling,
persuasive presentations that convert prospects.

USER INPUT:
Company: [our company name]
Target: [prospect company name]
Pain point: [what problem we solve for them]
Sales stage: [awareness/consideration/decision]
Context: [additional details]
OSINT data (if available): [company info]

TASK:
Generate sales pitch structure in JSON with slides.
Each slide:
- Clear title
- 2-4 key points
- Focus on prospect's specific needs/pain points
- Professional, consultative tone

LENGTH: 7-12 slides (flexible based on context)

OUTPUT FORMAT:
{
  "title": "Sales Pitch for [Company]",
  "slides": [
    {
      "type": "title",
      "title": "How We Help [Company]",
      "subtitle": "Solving [key pain point]"
    },
    {
      "type": "section",
      "title": "The Challenge"
    },
    {
      "type": "bullets",
      "title": "What We've Heard From Similar Companies",
      "bullets": [...]
    },
    ...
  ]
}
```

### 14.2 Sample Corporate Pitch Deck (Internal)

```
Slide 1: Problem
  "Your sales team spends 30% of time on presentations"
  "$200K wasted annually on design + content"

Slide 2: Solution
  "TargetPitch creates branded presentations in minutes"
  "Dynamic LLM routing ensures quality"

Slide 3: ROI
  "500 presentations/month × 30min saved = 250 hours"
  "250 hours × $50/hr = $12,500/month saved"
  "TargetPitch cost: $300/month"
  "ROI: 40x return, 9-day payback"

Slide 4: Implementation
  "Week 1: Setup + branding"
  "Week 2: Team training (1 hour)"
  "Week 3: Go live + analytics"

Slide 5: Success Metrics
  "Generation time tracking"
  "Team satisfaction surveys"
  "Conversion lift vs previous"

Slide 6: Next Steps
  "2-week free trial (100 presentations)"
  "Dedicated onboarding"
  "Weekly check-ins"
```

### 14.3 Launch Checklist

**Pre-Launch (Week 1)**

- [ ] Landing page live (custom Next.js)
- [ ] Form validation complete
- [ ] OpenAI API integration tested
- [ ] Database schema deployed
- [ ] Yookassa payment flow tested
- [ ] Vercel + Railway deployment configured
- [ ] SSL certificates / DNS configured
- [ ] Error monitoring (Sentry) set up
- [ ] Email templates created

**Beta Launch (Week 2-3)**

- [ ] Recruit 30-50 beta users
- [ ] Gather feedback (surveys, interviews)
- [ ] Monitor error rates & performance
- [ ] A/B test landing page
- [ ] Collect testimonials

**Public Launch (Week 4)**

- [ ] Landing page optimizations
- [ ] Yandex.Direkt campaign live ($500)
- [ ] Social media launch
- [ ] Press outreach

### 14.4 Financial Projections (12 Months)

```
Individual Tier (Tokens):
  Month 1: $200 MRR (5 paid users × $40)
  Month 6: $1,500 MRR (30 paid users × $50)
  Month 12: $3,000 MRR (50 paid users × $60)

Corporate Tier (Subscription):
  Month 1: $0 (launching later)
  Month 6: $1,000 MRR (1-2 accounts)
  Month 12: $8,000 MRR (2 Team Prof + 1 Enterprise)

Total MRR:
  Month 1: $200
  Month 6: $2,500
  Month 12: $11,000

Total ARR by Month 12: ~$132,000
Gross margin (blended): 85%
```

### 14.5 Positioning Matrix (Which Tier for Whom?)

```
                    | Free        | Tokens      | Team Prof   | Enterprise
--------------------|-------------|-------------|-------------|-------------
Solo SDR            | Yes         | Best ★      | —           | —
Consultant 1-3p     | Maybe       | Yes         | —           | —
Startup <50p        | Yes         | Best ★      | —           | —
Growing SaaS 50p    | —           | Maybe       | YES ★       | —
Enterprise 500p     | —           | —           | Maybe       | YES ★
Consulting firm     | —           | —           | YES ★       | YES ★
Agency              | —           | —           | YES ★       | YES ★
```

---

## Final Checklist Before Development

### Questions Resolved ✅

- ✅ No custom AI agent (token reselling)
- ✅ OSINT is paid add-on
- ✅ Flexible slide count (3-15+)
- ✅ PDF: html2canvas MVP, Puppeteer Phase 2
- ✅ Russia-first market
- ✅ Payment: Yookassa
- ✅ Deployment: Vercel + Railway
- ✅ Landing: Custom Next.js
- ✅ Beta: Tech-friendly IT companies
- ✅ LLM routing: Dynamic by type
- ✅ Corporate subscription: Three tiers
- ✅ Monetization: Free + Tokens + Corporate

### Still Open (For Dev Kickoff)

- Exact form fields (finalize in UX design)
- Presentation type taxonomy (sales/tech/strategic/team/other — may expand)
- LLM cost thresholds for routing (test during dev)
- User support channel (email? chat bot?)
- Custom domain strategy for white-label (Phase 2)

---

## Document Status

**Ready for**: Development sprint planning, Figma mockups, technical implementation

**Next Steps**:

1. Create Figma mockups (landing, form, presentation viewer)
2. Finalize technical implementation plan
3. Set up development environment (Vercel + Railway)
4. Begin Week 1 development sprint

---

**Version History**

- v1.0 (Dec 4): Initial PRD
- v2.0 (Dec 4): Token reselling + OSINT as add-on
- v3.0 (Dec 4): Dynamic LLM routing + Tech personas
- v3.1 (Dec 4): Corporate subscription tiers
- v3.2 (Dec 4): **UNIFIED — Complete document**

---

**Last Updated**: December 4, 2025, 22:56 MSK  
**Owner**: Product Team  
**Status**: APPROVED FOR DEVELOPMENT
