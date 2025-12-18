import { EvePay } from './sdk/eve-pay-client.js';

const eve = new EvePay({
  baseUrl: 'https://api.evegrocer.app/api/v1'
});

// 1) Init payment
const init = await eve.initPayment({
  external_ref: 'TASK-12345',
  amount: 1500,
  currency: 'PHP',
  region: 'ph',
  customer_id: 'user_001'
});

// 2) After collecting payment (card, bank, web3...)
const confirm = await eve.confirmPayment({
  external_ref: 'TASK-12345',
  payment_reference: init.payment_reference,
  tx_hash: '0xSOME_TX_HASH'
});

console.log(init, confirm);

