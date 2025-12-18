# EVE Pay SDK (v1)

A lightweight, API-first payment and sustainability SDK enabling
fintech, ERP, and commerce platforms to integrate multi-rail payments
with ESG, carbon, and blockchain-backed transparency.

EVE Pay is **platform-agnostic** and designed for ERP systems,
marketplaces, and payment orchestration layers.

---

## Key Capabilities

- 🌍 Region-based payment initialization
- 💳 Fintech + Web3 compatible
- 🌱 ESG & sustainability-ready
- 🔗 Blockchain-verifiable payment confirmation
- 🧩 ERP / Redmine / SAP-friendly integration
- 🚫 No lock-in, no proprietary UI required

---

## Base URL
https://api.evegrocer.app/api/v1

## Init Payment
POST /payments/init

### Example
```bash
curl -X POST https://api.evegrocer.app/api/v1/payments/init \
  -H "Content-Type: application/json" \
  -d '{
    "region": "ph",
    "amount": 1500,
    "currency": "PHP",
    "wallet": "0xABC123"
  }'

## Fees

EVE Pay applies a transparent platform fee at the API level.

Fees are returned during payment initialization and can be
logged or displayed by the integrating platform.

### Fee Transparency

EVE Pay calculates fees server-side during payment initialization.

Returned fee fields:
- `platform` – EVE platform fee
- `partner` – integrator / ERP share (optional)
- `total` – total fees deducted
- `net_amount` – amount to be settled

This design ensures:
- Consistent fee enforcement
- Auditability
- ERP / accounting compatibility

npm i eve-pay-sdk   (future placeholder)


