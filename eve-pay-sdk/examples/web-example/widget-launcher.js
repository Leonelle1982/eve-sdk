// examples/web/widget-launcher.js
import { EvePay } from '../../sdk/eve-pay-client.js';

const logEl = document.getElementById('widgetLog');
const btn = document.getElementById('btnWidget');

const eve = new EvePay({
  baseUrl: 'https://api.evegrocer.app/api/v1'
});

function writeLog(obj) {
  logEl.textContent = JSON.stringify(obj, null, 2);
}

btn.addEventListener('click', async () => {
  try {
    const init = await eve.initPayment({
      external_ref: `WEB-DEMO-${Date.now()}`,
      amount: 1500,
      currency: 'PHP',
      region: 'ph',
      customer_id: 'web-demo',
      metadata: {
        channel: 'widget-example'
      }
    });

    writeLog(init);
  } catch (err) {
    writeLog({ error: err.message });
  }
});

