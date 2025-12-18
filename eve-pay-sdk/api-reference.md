# API Reference — v1

## POST /payments/init
Request:
{
  region,
  amount,
  currency,
  external_ref,
  metadata
}

Response:
{
  status,
  payment_reference,
  fees,
  net_amount
}

## POST /payments/confirm
Blockchain verification + ERP binding response

