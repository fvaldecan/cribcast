Rental Comparison Tool — Build Spec & Prompt for Claude Code

Instructions for Claude Code

Build a working web app that implements the spec below. Stack: Next.js (App Router) + TypeScript. All Anthropic API calls happen server-side in app/api/ route handlers — never in a "use client" component. See Section 0 for the full security and distribution model before writing any code.

A few things to handle explicitly:

Persistence: listings, priorities, and deal-breakers should survive a page refresh. Use localStorage — this is a real local-first app, not a claude.ai artifact, so standard browser storage APIs apply normally.
AI-research components (grocery/gym/commute/social-life proximity, adaptive follow-up questions) require an Anthropic API key in the user's local .env.local. If no key is present, run a clearly marked mock/demo mode using placeholder data — flag this visibly in the UI. Don't silently fake this.
Keep the scoring engine isolated from the UI (a separate module/function) so the math can be tested independently.
Build incrementally: get the data model + manual scoring working first, then layer in AI research and adaptive questions. Do not build AI features before the scoring engine has passing tests.
If anything below is ambiguous or underspecified, ask rather than guessing — this spec went through several rounds of refinement and the intent matters more than filling gaps silently.

0. Security & Distribution

Repo is public. .env.example is committed (template only, no real key). .env.local is gitignored and holds the user's real key. README explains setup: clone, npm install, copy .env.example to .env.local, add own key, npm run dev.

All Anthropic API calls live in app/api/ route handlers, reading process.env.ANTHROPIC_API_KEY server-side. Client components call these internal routes (e.g. fetch("/api/research")) — never the Anthropic API directly, and never with the key in any client-visible code, network tab, or bundle.

No rate limiting is needed for this distribution model since each user's key only serves their own requests. Mock mode is the only fallback required when a key is absent.

1. Data Model

A. Required Property Inputs (per listing)

FieldTypeNotesAddresstextUsed for external/lifestyle researchRentnumber ($/mo)Utilitiestoggle: included / separateIf separate → sub-fields: water, gas, electricity, trash (each: included / $ estimate / unknown)Parkingfree / paid ($) / noneWasher/Dryerin-unit / shared in building / laundromat / noneWifiincluded / separate $ / noneBedroomsnumber + size (sq ft) per roomBathroomsnumber + shared or private

B. Optional Custom Inputs

User can add arbitrary fields: label, value, and an importance weight (1–5).
These slot into scoring the same way as core fields once added.

C. External / Lifestyle Factors (research-assisted)

FactorRequired inputAI-assisted researchGroceriesnone requiredAI finds nearby stores from address (distance/time)Gymnone requiredAI finds nearby gymsCommutework address (optional)AI/maps estimates time per time-of-day variant (see detail below)Social lifeuser-defined activity list (optional)AI finds proximity/availability for those specific activities, not generic nightlife data

Each of these also has an optional freeform text box ("anything else that matters here?") — this is where the adaptive questioning kicks in (see Section 3).

Social life field detail: user adds specific activities (e.g., "bouldering gym," "pickleball courts," "coffee shop to work from"). AI researches proximity/quality for each named activity rather than defaulting to generic nightlife/walkability data. If the user leaves this blank, fall back to a generic walkability/social-density score with a disclaimer that it's not personalized.

Commute field detail: commute is not a single score. User can input 1–3 relevant time windows (e.g., "weekday morning," "weekday evening," "weekend"). AI/maps estimates drive or transit time for each window separately — see Section 4 for how these roll up.

2. Priority & Deal-Breaker Setup (runs once, before scoring)

Priority weighting: user assigns 1–5 importance to each category (rent, commute, laundry, groceries, social life, etc.). Optional: mark a category "flexible" vs "firm" on price specifically — this is a display-only note, not a scoring input. It doesn't change the rent weight or the math; it just shows up next to the listing as context (e.g., "Rent: firm — over budget" vs "Rent: flexible — slightly over but open to it").

Deal-breakers: a separate, explicit list — NOT part of the 1–10 weighted scoring. Each is a binary condition, e.g.:

"Washer/dryer must not be 'none'"
"Rent must not exceed $X"
"Commute must not exceed Y minutes"

If a listing violates any deal-breaker, it is flagged "Disqualified — violates deal-breaker: [X]" regardless of its numeric score. It still displays in the comparison (visually demoted/grayed) so the user can see why, but it shouldn't rank above passing listings.

3. Adaptive AI Questions

For hard-to-quantify categories (groceries, social life, commute flexibility), the AI generates 2–3 follow-up questions based on the address and any freeform input. Example: for groceries, it might ask "Do you shop at a specific store, or is proximity to any grocery store fine?" Answers feed directly into that category's score — they are not a separate output.

This calls through app/api/ — never directly from the client.

4. Scoring Engine

This module must be pure and isolated from React/Next.js code — plain TypeScript functions, unit-testable with no UI or framework dependencies.

Every essential metric (rent value, commute, laundry, groceries, gym, social life, etc.) gets a 1–10 score.
Missing data: default score of 3 (below-average, not zero — avoids conflating "unknown" with "confirmed bad"), plus a visible disclaimer: "Limited data available for [field]."
Overall score = weighted average: Σ(score_i × weight_i) / Σ(weight_i), scaled 1–10 (or 0–100).
Commute scoring: if the user defines multiple time windows, each gets its own 1–10 sub-score. Default behavior: roll these into one "commute" score weighted toward whichever windows the user actually drives (e.g., weekday morning/evening weighted higher than weekend). The worst window can optionally be surfaced separately if it's notably bad (e.g., "Evening commute: 6/10 — heavy traffic 5–6pm" shown as a callout even though the rolled-up score is decent).
Social-life scoring: each user-defined activity (bouldering gym, pickleball courts, etc.) gets its own proximity/quality sub-score; these average into one "social life" score. If no activities were defined, this falls back to a generic walkability score, flagged as non-personalized.
Deal-breaker check runs independently, first. A violation overrides the numeric score for ranking purposes — the listing is marked disqualified no matter how high it scores otherwise.

5. Output Per Listing

Overall score
Generated tags from sub-score thresholds (e.g., commute score ≥8 → "Close to work"; rent score ≥8 → "Cheap")
Auto-generated pros/cons: any sub-score ≥8 → pro; ≤4 → con
Deal-breaker flag (if applicable), shown prominently — not buried
Data completeness disclaimer if any field was defaulted
Mock-data disclaimer if no API key is present and AI-research fields are using placeholder values

6. Comparison View

Side-by-side cards or table, ranked by overall score. Disqualified listings appear visually separated (grayed/lower section) with their disqualifying reason, not silently dropped.

7. Repo Contents Checklist

.env.example — template with ANTHROPIC_API_KEY=your-key-here, committed
.env.local — real key, gitignored, never committed
.gitignore — excludes .env.local, .env, node_modules, .next
README.md — setup instructions for someone cloning the repo cold
docs/spec.md — this file
docs/adr/ — architecture decision records, created as significant decisions are made
app/api/ — all server-side AI calls
app/ (rest) — client components and pages
