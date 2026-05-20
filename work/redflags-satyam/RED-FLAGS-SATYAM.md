# What the Numbers Whispered — A Forensic Read of Satyam (pre-2009)

> **What this is:** a teaching retrospective on the **Satyam Computer Services** fraud, using
> only the public, adjudicated record. On 7 January 2009, chairman **B. Ramalinga Raju confessed
> in a letter to the board** that the accounts were falsified; the fraud was later investigated
> by the SFIO/SEBI/SEC and Raju and others were **convicted in 2015**. So nothing here is an
> allegation — it's documented history. The point of the exercise is the **detection method**:
> which red flags an analyst could have caught in the published numbers *before* the confession.
>
> *Verify exact figures against the confession letter / SFIO report before presenting.
> Educational forensic-accounting exercise, not investment advice.*

---

## TL;DR — the one number that whispered loudest

Satyam's books showed roughly **₹5,040 crore of cash and bank balances** — that **didn't exist**.
The tell an analyst could have caught for years: **that "cash" earned almost no interest.**
Real cash sitting in a bank earns a yield. Cash that earns nothing may not be there. One simple
ratio — *interest income ÷ cash balance* — was quietly screaming.

The confession admitted a total inflation of about **₹7,136 crore**. For one quarter (Q2 FY09)
the gap was stark: a reported operating margin of **~24%** was, in reality, about **3%**.

---

## 1. What Satyam was
India's 4th-largest IT-services company (founded 1987, Hyderabad), NYSE-listed via ADRs, tens of
thousands of employees, a market darling — even a 2008 corporate-governance award winner. That's
the point: **fraud doesn't look like fraud from the outside.** You have to read the numbers.

## 2. What was actually false (from the confession)
- **~₹5,040 cr** of non-existent cash & bank balances.
- **~₹7,136 cr** total inflation of assets/profits, built up from 2003–2008.
- Fabricated revenue via **~7,500 fake invoices** to non-existent / non-paying customers.
- Reportedly **~13,000 "ghost" employees** inflating billing.
- Understated liabilities and overstated debtors.

## 3. The red flags an analyst could have caught

For each: the **signal**, what it looked like in the **numbers**, and the **question** to ask.
(On a live company these are *questions*, not verdicts — many have innocent answers. Satyam's,
tragically, did not.)

**A. The cash that earned nothing  ← the big one**
- *Signal:* a large, growing cash pile.
- *Numbers:* ₹5,000+ cr of "cash" — yet interest income was far too small for that balance.
- *Question:* "If you're sitting on ₹5,000 cr, where's the ~₹350–400 cr of interest it should
  earn? And why hold idle cash instead of dividends/buybacks?" Compute **implied yield =
  interest income ÷ average cash.** An abnormally low yield is a classic sign cash isn't real.

**B. Margins/returns that didn't reconcile with cash use**
- *Signal:* strong reported profits and a fortress balance sheet…
- *Numbers:* …but cash never came back to shareholders in proportion (modest payouts).
- *Question:* "Profitable, cash-rich companies return cash. Why doesn't this one?" A gap between
  *reported* profitability and *actual* cash behaviour is a quality-of-earnings warning.

**C. The related-party trigger — Maytas (Dec 2008)**
- *Signal:* a sudden, odd capital-allocation move.
- *Numbers/event:* Satyam tried to buy **Maytas Properties & Maytas Infra — firms owned by the
  chairman's sons** ("Maytas" is "Satyam" spelled backwards) for ~$1.6bn of that "cash."
- *Question:* "Why is an IT company buying the promoter's family's infrastructure businesses?"
  Related-party transactions that move shareholder cash toward insiders are a top governance flag.
  (Raju later called it a last-ditch attempt to *replace the fake cash with real assets.*) The
  investor revolt that killed the deal is what precipitated the confession.

**D. Promoter behaviour**
- *Signal:* founders reducing/pledging their stake while reporting record results.
- *Question:* "If the future is so bright, why is the promoter selling/pledging?" Falling promoter
  holding alongside rising reported profits is a contradiction worth chasing.

**E. Revenue quality / receivables**
- *Signal:* fabricated invoices inflate sales.
- *Numbers:* watch **Days Sales Outstanding (DSO)** vs peers — fake revenue with no real customer
  tends to inflate receivables or sit oddly in cash.
- *Question:* "Are debtor days drifting above Infosys/TCS/Wipro, and why?"

**F. Governance & audit**
- *Signal:* a board that waved through the Maytas deal; a single long-tenured auditor.
- *Question:* "Are the independent directors actually independent? Is the auditor verifying the
  bank balances directly with the banks?" (The auditors did not independently confirm the cash.)

## 4. The transferable checklist (this is the real skill)

The reusable version lives in **`forensic-checklist.csv`** — apply it to any company. The spine:

1. **Cash quality** — interest income ÷ cash. Too low? Ask why.
2. **Earnings quality** — 5-yr **net profit vs operating cash flow.** Profit with no cash is a flag.
3. **Receivables/inventory days** vs peers and vs own history.
4. **Related-party transactions** — size, direction (toward insiders?), commercial logic.
5. **Promoter stake & pledging** trend.
6. **Auditor** — tenure, fees, any resignation/qualification, do they confirm bank balances.
7. **Margins vs peers** — too good, and not converting to cash?
8. **Contingent liabilities & off-balance-sheet** items in the notes.

## 5. The lesson
Satyam's collapse wasn't invisible — it was *unexamined.* The single most powerful habit a
young CA can build is **scepticism about cash**: don't take the balance-sheet number on faith,
ask what it should be earning and whether it behaves like real money. That instinct — "trust,
then verify, starting with the cash" — is the whole job of an auditor.

---

## Sources
- Satyam scandal — Wikipedia: https://en.wikipedia.org/wiki/Satyam_scandal
- Ramalinga Raju — Wikipedia: https://en.wikipedia.org/wiki/Ramalinga_Raju
- U.S. SEC litigation release, Satyam Computer Services: https://www.sec.gov/enforcement-litigation/litigation-releases/lr-21915

---

## How to present this as a portfolio project
- **Deliverable:** this note as a 2-page PDF + the `forensic-checklist.csv` as a tool you can show.
- **Site card** (`src/content/profile.ts`):
  `{ title: 'What the numbers whispered: Satyam', blurb: 'A forensic read of the red flags hiding in Satyam\\'s statements before the 2009 confession — and a reusable checklist to catch the next one.', year: '2026', href: '<link>' }`
- **Interview one-liner:** *"I went back through the Satyam fraud and pulled out the red flags an
  analyst could have caught from the public numbers — the loudest being ₹5,000 crore of 'cash'
  that earned almost no interest. I turned it into a forensic checklist I can run on any company."*
