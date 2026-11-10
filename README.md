# ProofPass Frontend

A polished HTML/CSS/JavaScript frontend for the ProofPass blockchain internship verification DApp.

## Stack

- HTML
- CSS
- JavaScript
- Ethers.js v6
- MetaMask
- Ethereum Sepolia
- QRCode.js

## Setup

1. Open `app.js`.
2. Replace:

```js
const CONTRACT_ADDRESS = "PASTE_YOUR_SEPOLIA_CONTRACT_ADDRESS_HERE";
```

with your deployed ProofPass contract address.

3. Open `index.html` using Live Server.
4. Make sure MetaMask is connected to Ethereum Sepolia.

## Features

- MetaMask wallet connection
- Internship verification without wallet
- Authorized issuer internship issuance
- Student "My Internships" dashboard
- Owner-only issuer authorization
- Active / Completed / Revoked status
- Shareable verification URL using `?id=INTERNSHIP_ID`
- QR code for every verification result
- Responsive dark UI

## Example

A verification link looks like:

`http://localhost:5500/index.html?id=1`

After deployment to a public frontend host, the same URL can be shared with recruiters.

## Important

This frontend uses the deployed ProofPass contract and the ABI included in `app.js`. Do not deploy a new contract unless you intentionally want a new contract address.
