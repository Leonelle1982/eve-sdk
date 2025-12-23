// examples/redmine/redmine-eve-pay.js

export function attachRedmineDemo({ eve }) {
  const taskInput = document.getElementById('taskId');
  const amountInput = document.getElementById('amount');
  const btnInit = document.getElementById('btnInit');
  const btnConfirm = document.getElementById('btnConfirm');
  const log = document.getElementById('log');

  let lastInit = null;

  function writeLog(obj) {
    log.textContent = JSON.stringify(obj, null, 2);
  }

  btnInit.addEventListener('click', async () => {
    try {
      const external_ref = taskInput.value || 'TASK-12345';
      const amount = Number(amountInput.value || 0);

      const init = await eve.initPayment({
        external_ref,
        amount,
        currency: 'PHP',
        region: 'ph',
        customer_id: 'redmine-demo',
        metadata: {
          source: 'redmine-example'
        }
      });

      lastInit = init;
      btnConfirm.disabled = false;
      writeLog(init);
    } catch (err) {
      writeLog({ error: err.message });
    }
  });

  btnConfirm.addEventListener('click', async () => {
    if (!lastInit) {
      return writeLog({ error: 'No initialized payment yet' });
    }

    try {
      const confirm = await eve.confirmPayment({
        external_ref: lastInit.external_ref,
        payment_reference: lastInit.payment_reference,
        amount: lastInit.amount,
        currency: lastInit.currency,
        tx_hash: 'redmine-manual-approval',
        provider: 'redmine-demo',
        proof_url: 'https://example.com/redmine/payment-proof'
      });

      writeLog(confirm);
    } catch (err) {
      writeLog({ error: err.message });
    }
  });
}

