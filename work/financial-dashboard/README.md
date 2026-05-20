# Project 5 — Financial-Health Dashboard

An **interactive, single-file dashboard** that turns five years of a company's statements into a
one-screen read on its financial health — margins, returns, growth, balance-sheet strength — with
a scorecard and a plain-English verdict. Demoed on **Pidilite**; built to be reusable for any company.

## View it
Open **`pidilite-dashboard.html`** in any browser. No build, no dependencies — just double-click.
(It loads three fonts from Google Fonts; everything else is self-contained.)

## What it shows
- **Headline KPIs** (FY26): revenue & net profit with YoY, EBITDA & net margin, ROCE, ROE, Debt/Equity, P/E.
- **Trend charts** (FY22–FY26): revenue vs net profit (bars), and EBITDA vs net margin (lines) — inline SVG, no chart library.
- **Health scorecard**: Profitability / Returns / Growth / Balance-sheet / Liquidity / Valuation, each rated Strong / Good / Watch.
- **Verdict**: the one-paragraph takeaway.

## Reusable — run it on any company
Edit the **`DATA` object at the top of the `<script>`** (company name, the 5-year arrays for
revenue / EBITDA / margin / net profit, and the latest ROCE/ROE/P/E etc.). Everything recomputes.
That's the point: it's a *tool*, not a one-off.

## Data honesty
- The Pidilite figures are **reported** (screener.in) — revenue, EBITDA/operating margin, net profit, ROCE, ROE, P/E.
- **Liquidity & efficiency** ratios (current ratio, debtor/inventory days) need the full balance
  sheet — the scorecard flags them as "add from the balance sheet." Fill them from the FY26 annual report.
- Verify all figures before you publish. Educational, not investment advice.

## Make it a *live* link (optional, recommended)
Your site already deploys static files from `public/`. To host the dashboard on your own domain:
1. Copy `pidilite-dashboard.html` into the site's `public/` folder.
2. After deploy it's live at `https://spacechase26.github.io/Harendra/pidilite-dashboard.html`.
3. Point the Projects card's `href` at that URL — now the card opens a real, live dashboard.

## Present it as a portfolio project
- **Site card** (`src/content/profile.ts`):
  `{ title: 'Pidilite financial-health dashboard', blurb: 'An interactive 5-year dashboard — margins, returns, growth and balance-sheet strength at a glance, with a verdict.', year: '2026', href: '<live link>' }`
- **Interview one-liner:** *"I built a single-file interactive dashboard that turns five years of a
  company's statements into a one-screen health read — margins, ROCE/ROE, growth, leverage — with a
  scorecard and verdict. I can re-point it at any company by swapping one data object."*

### Together with Projects #1 and #2
This is the third lens on the same company — **valuation (#1) + cost structure (#2) + financial
health (#5)**. Presented together, it reads as a complete, deliberate analyst workup on Pidilite,
which is far more impressive than three unrelated samples.
