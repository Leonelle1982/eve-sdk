<?php
$data = [
  "region"=>"ph",
  "amount"=>1500,
  "external_ref"=>"TASK-123"
];

$curl = curl_init("https://api.evegrocer.app/v1/payments/init");
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);

echo $response;
?>

