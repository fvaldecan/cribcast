# CribCast

Compare rental listings against your own priorities and
deal-breakers, with AI-assisted research on commute,
groceries, and lifestyle factors.

## Setup

1. Clone this repo
2. Run `npm install`
3. Copy `.env.example` to `.env.local`
4. Add your own Anthropic API key to `.env.local`
   (get one at console.anthropic.com)
5. Run `npm run dev`

Your API key stays on your machine and is only ever sent
directly to Anthropic's API — never to any server.

## Without an API key

The app runs in mock mode using placeholder data for
AI-research features. Manual scoring works fully without
any key.
