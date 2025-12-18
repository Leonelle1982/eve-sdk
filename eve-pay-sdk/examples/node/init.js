<script type="module">
import { eveInit } from "../../sdk/eve-pay-client.js";

async function test() {
  const r = await eveInit({
    region:"ph",
    amount:500,
    currency:"PHP",
    external_ref:"TEST-001"
  });

  console.log(r);
}
test();
</script>

