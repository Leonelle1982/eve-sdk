import requests

payload = {
    "region":"ph",
    "amount":1500,
    "external_ref":"PY-TEST"
}

r = requests.post("https://api.evegrocer.app/v1/payments/init", json=payload)
print(r.json())

