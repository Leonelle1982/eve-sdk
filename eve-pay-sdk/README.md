🌱 EVE Pay SDK — Enterprise ERP Payment Rails for Earth
Plug-and-play global payments for ERP, Redmine, and web platforms.
No lock-in. No complexity. ESG-ready. Blockchain optional.

🚀 Why EVE Pay Exists
Modern ERPs are powerful — but payments are fragmented, regional, and expensive.
EVE Pay provides a single API that:
    • initializes payments
    • handles checkout
    • unifies fees
    • logs finance-safe ledger data
    • fits into ERPs without rewriting code
    • and supports fintech + sustainability
This is the Stripe-for-ERP layer the industry doesn’t have.

🔗 Base API Endpoint
https://api.evegrocer.app/v1

⚡ Quick Start: Initialize a Payment
POST /init
Payload:
{
  "external_ref": "ORDER-1001",
  "amount": 100,
  "currency": "USD"
}
Response:
{
  "status": "initialized",
  "payment_reference": "EVE-170001",
  "net_amount": 98.0,
  "fees": {
    "platform": 1.5,
    "partner": 0.5
  }
}

🌍 Launch Hosted Checkout
<iframe
  src="https://api.evegrocer.app/v1/pay?ref=EVE-170001"
  width="100%"
  height="650"
></iframe>

🧩 ERP Integration Kits Included
PDFs inside:
    • Redmine
    • SAP
    • Odoo
    • Oracle NetSuite
    • ERPNext
    • OMS

🔐 Security & Compliance
    • PCI: handled by hosted checkout
    • API keys: public only
    • No wallet exposure
    • HTTPS enforced

🔄 Architecture Highlights
    • Node-agnostic
    • ERP-agnostic
    • Blockchain optional
    • Region-based fee engine
    • Supabase ledger friendly

🧱 Folder Structure
/public/web
/openapi.json
/pdf ERP kits
/examples

🧠 Who uses this SDK?
ERPs, dev shops, fintechs, and enterprise platforms building:
    • invoicing rails
    • project billing
    • e-commerce workflows
    • subscription flows
    • sustainability payment models

🤝 Enterprise Contact
enterprise@evegrocer.app
