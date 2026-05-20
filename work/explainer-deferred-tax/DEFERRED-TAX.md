# Deferred Tax, in plain English

*Most students can recite the definition and still not feel it. Here's the version that
actually clicks — one idea, one worked example, and the rule you'll never forget again.*

---

## The one sentence
**The tax you pay the government this year and the tax that "belongs" to this year's reported
profit are often different — deferred tax is the bridge that fixes that mismatch.**

That's it. Everything below is just *why* they differ and *how* the bridge works.

## The problem it solves
Your **accounting profit** (in the P&L) and your **taxable profit** (in the tax return) are
calculated under different rulebooks. Some items are counted in *different years* by each. The
classic culprit is **depreciation**: the rate you use in your books isn't the rate the tax law
allows. So in any given year you might pay *less* tax than your reported profit suggests — or
*more*.

If you simply put "tax actually paid" in the P&L, your tax expense would lurch around and wouldn't
match the profit you reported. Deferred tax smooths that out, so the P&L shows the tax that
**belongs to the profit earned** — the matching principle, applied to tax.

## One worked example (this is the whole concept)
A machine costs **₹3,00,000**, useful life **3 years**. Tax rate **25%**. Profit *before*
depreciation and tax is a steady **₹2,00,000** every year.

- **Books:** straight-line depreciation → ₹1,00,000 each year.
- **Tax:** allows accelerated depreciation → ₹1,50,000, ₹1,00,000, ₹50,000 (front-loaded).

Both total ₹3,00,000 — only the *timing* differs. Watch what happens:

| | Year 1 | Year 2 | Year 3 | Total |
|---|---|---|---|---|
| Profit before dep & tax | 2,00,000 | 2,00,000 | 2,00,000 | 6,00,000 |
| **Book** depreciation | 1,00,000 | 1,00,000 | 1,00,000 | 3,00,000 |
| **Accounting profit** | 1,00,000 | 1,00,000 | 1,00,000 | 3,00,000 |
| **Tax** depreciation | 1,50,000 | 1,00,000 | 50,000 | 3,00,000 |
| **Taxable profit** | 50,000 | 1,00,000 | 1,50,000 | 3,00,000 |
| **Current tax paid** (25% × taxable) | 12,500 | 25,000 | 37,500 | 75,000 |
| Tax "owed" on accounting profit (25%) | 25,000 | 25,000 | 25,000 | 75,000 |
| **Deferred tax** (the plug) | +12,500 | 0 | −12,500 | 0 |
| **P&L tax expense** (current + deferred) | **25,000** | **25,000** | **25,000** | **75,000** |

Read the bottom two rows:
- **Year 1** — tax depreciation is higher, so you pay only ₹12,500 in cash. But your reported
  profit "owes" ₹25,000. You haven't escaped that ₹12,500 — you've just **deferred** it. So you
  create a **Deferred Tax Liability of ₹12,500** and your P&L still shows the full ₹25,000.
- **Year 3** — now book depreciation is higher, taxable profit jumps, and you pay ₹37,500 in cash.
  The earlier liability **reverses**: the DTL of ₹12,500 unwinds, so the P&L *still* shows ₹25,000.
- **Over three years the total tax is identical (₹75,000).** Deferred tax never changed how much
  tax you pay — only *which year the P&L recognises it.*

That last line is the "aha." Deferred tax is **timing, not money.**

## DTA vs DTL — the rule you won't forget
- **Pay LESS tax now than your books imply → you'll pay it later → Deferred Tax LIABILITY (DTL).**
- **Pay MORE tax now than your books imply → you'll get it back later → Deferred Tax ASSET (DTA).**

Two quick handles:
- Via depreciation: **tax dep > book dep → DTL**; **tax dep < book dep → DTA**.
- DTA examples: a provision for doubtful debts or warranties (the tax man disallows it until it
  actually happens, so you pay more now), or **carry-forward losses** (a future tax saving — though
  prudence says only recognise a DTA when future profits are reasonably/virtually certain).

## The grown-up definition (so the textbook makes sense now)
- **AS 22** calls these **timing differences** and works from the **P&L** — exactly what we did above.
- **Ind AS 12** works from the **balance sheet**: it compares an asset/liability's **carrying amount**
  (books) with its **tax base** (tax), and any **temporary difference** × tax rate = the deferred
  tax. In our example, end of Year 1 the machine is ₹2,00,000 in the books but ₹1,50,000 for tax —
  a ₹50,000 temporary difference × 25% = the **₹12,500 DTL.** Same answer, different doorway.

## Common confusions, cleared
- *"Is deferred tax real cash?"* — No. The cash tax is the **current tax**. Deferred tax is an
  accounting entry to match expense to profit.
- *"Does it change my total tax?"* — No. It only moves recognition between years.
- *"DTA sounds like a good thing?"* — It's a future *saving*, but it's only worth booking if you'll
  actually have future profits to save tax against (hence the prudence test).

---

## Present it as a portfolio project
- **Deliverable:** publish this as a short post (LinkedIn, or your site's writing section). The
  worked table is the hook — lead with it.
- **Site card** (`src/content/profile.ts`):
  `{ title: 'Deferred tax, in plain English', blurb: 'The explainer I wish I had: one idea, one worked example, and the DTA-vs-DTL rule that finally sticks.', year: '2026', href: '<link to the post>' }`
- **Why it works:** teaching a confusing topic clearly is the strongest possible proof you *truly*
  understand it — and explainers are the most shareable thing you can post.
