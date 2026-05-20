# Project 4 — GST Input-Credit Reconciliation Tool

A **working Excel tool** that matches a Purchase Register (your books) against **GSTR-2B**
(what your suppliers actually filed) and flags every line — so you know exactly how much
input tax credit (ITC) you can safely claim, and how much is at risk.

## Files
- **`gst-reconciliation-tool.xlsx`** — the tool. Open in Excel or Google Sheets. Live formulas.
- **`build_gst_tool.py`** — the Python (openpyxl) script that generates it. Shows exactly how
  the reconciliation logic is built; run `python3 build_gst_tool.py` to regenerate.

## How to use
1. Open the `.xlsx`. Read the **ReadMe** sheet first.
2. Replace the dummy rows in **Purchase_Register** and **GSTR_2B** with your own data
   (keep the columns). Everything recalculates automatically.
3. Read the **Status** column on each sheet, and the **Summary** sheet for the totals.

## How the matching works
- Match key = **Supplier GSTIN | Invoice No** (built in the "Match Key" column).
- Each book invoice is looked up in 2B (`INDEX/MATCH`); each 2B invoice is checked against the
  books (`COUNTIF`). Every line lands in one of four buckets:

| Status | Meaning | Action |
|---|---|---|
| **Matched** | In both, values agree | ITC safe to claim |
| **Matched with difference** | In both, value/tax differs | Investigate & correct |
| **In books, not in 2B** | You booked it, supplier hasn't filed | **ITC at risk** — follow up with supplier |
| **In 2B, not in books** | In 2B but not your books | Missed entry, or not yours |

## Expected result on the dummy data (so you can check your understanding)
- **Matched (5):** INV-1001, 2002, 5005, 6006, 8008
- **Matched with difference (1):** INV-3003 (books ₹80,000/₹14,400 vs 2B ₹78,000/₹14,040)
- **In books, not in 2B — ITC at risk (2):** INV-4004 (₹5,400), INV-7007 (₹8,100)
- **In 2B, not in books (1):** INV-9009 (Iyer Agencies)
- **Total ITC in books:** ₹73,800 → **safe now (matched): ₹45,900** · **follow up: ₹27,900**

## The rules behind it (why "not in 2B" = at risk)
- **Sec 16(2)(aa) / Rule 36(4):** ITC is allowed only if the invoice appears in GSTR-2B — so
  credit on "in books, not in 2B" can't be taken until the supplier files.
- Also required: a valid tax invoice, goods/services received, tax actually paid to government,
  and the claim made within the time limit (by 30 Nov of the next financial year).
- **Sec 17(5):** some credits are blocked (motor vehicles, personal use, etc.) — a manual check.
- *Dummy data for demonstration; confirm current rules before using in practice.*

## Present it as a portfolio project
- **Site card** (`src/content/profile.ts`):
  `{ title: 'GST input-credit reconciliation tool', blurb: 'A working Excel tool that matches the purchase register to GSTR-2B and surfaces exactly how much ITC is safe vs. at risk.', year: '2026', href: '<link to the xlsx / a short demo>' }`
- **Interview one-liner:** *"I built a GST reconciliation tool in Excel — it matches the purchase
  register to 2B on GSTIN + invoice, classifies every line (matched / difference / ITC-at-risk /
  extra in 2B), and totals the credit you can safely claim versus what to chase. Live formulas,
  so it recomputes on real data."*
