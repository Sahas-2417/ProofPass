# 🚀 ProofPass — Blockchain-Based Internship Verification

> **A blockchain-powered DApp for issuing, managing, and independently verifying internship records on Ethereum.**

ProofPass is a decentralized internship verification platform that enables authorized organizations to issue blockchain-backed internship records and allows students, recruiters, and other users to independently verify those records using a unique Internship ID.

Instead of relying only on certificates, screenshots, or manually shared documents, ProofPass provides a transparent verification layer powered by a Solidity smart contract deployed on the **Ethereum Sepolia Testnet**.

---

## 🌐 What is ProofPass?

Internship experience is commonly presented through certificates or resume entries, but verifying whether a particular internship is genuine can be difficult.

ProofPass addresses this problem by storing internship verification records on-chain.

An authorized issuer can create an internship record containing details such as:

- Student wallet address
- Company / organization
- Internship role
- Start date
- End date
- Project / work description
- Issuer wallet
- Issue timestamp
- Verification status

Each internship receives a unique **Internship ID**, which can then be used by anyone to verify the record.

---

## ✨ Key Features

### 🔐 Blockchain-Based Verification
Internship records are stored and retrieved through a Solidity smart contract deployed on Ethereum Sepolia.

### 🏢 Authorized Issuers
Only authorized issuer wallets can create internship records.

### 🎓 Student Records
Students can connect their wallet and view internship records associated with their address.

### 🔎 Public Verification
Anyone can verify an internship using its unique Internship ID. A wallet is **not required** for public verification.

### 🚫 Revocation
Authorized issuers can revoke an internship record when necessary.

### 📊 Status Tracking
Records can be presented with states such as:

- 🟢 Active
- 🔵 Completed
- 🔴 Revoked

### 🔗 Shareable Verification
Every internship verification can be accessed through a shareable URL:

```text
https://your-domain.com/index.html?id=1
```

### 📱 QR Code Verification
A QR code is generated for verification results, allowing recruiters or other users to quickly open the verification page.

### 🦊 MetaMask Integration
MetaMask is used for wallet connection and signing blockchain transactions.

### 🌙 Responsive Dark UI
The frontend provides a clean, modern interface designed for an actual verification experience rather than a basic blockchain demo.

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │       User           │
                    │ Student / Recruiter  │
                    │       / Issuer       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   ProofPass Frontend │
                    │    HTML / CSS / JS   │
                    └──────────┬───────────┘
                               │
                         Ethers.js v6
                               │
                               ▼
                    ┌──────────────────────┐
                    │      MetaMask        │
                    │ Wallet / Transactions│
                    └──────────┬───────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │     ProofPass Smart Contract    │
              │            Solidity             │
              └───────────────┬─────────────────┘
                              │
                              ▼
                    ┌──────────────────────┐
                    │   Ethereum Sepolia   │
                    │      Testnet         │
                    └──────────────────────┘
```

---

## ⚙️ Technology Stack

| Technology | Purpose |
|---|---|
| **Solidity** | Smart contract development |
| **Ethereum Sepolia** | Blockchain deployment and testing |
| **Remix IDE** | Contract development, deployment and testing |
| **MetaMask** | Wallet connection and transaction signing |
| **Ethers.js v6** | Frontend-blockchain integration |
| **HTML** | Frontend structure |
| **CSS** | UI design and responsive styling |
| **JavaScript** | Frontend logic and Web3 interaction |
| **QRCode.js** | QR code generation |

---

## 📂 Project Structure

```text
ProofPass/
│
├── contract/
│   └── ProofPass.sol
│
├── docs/
│   ├── ProofPass Verification.pdf
│   └── ProofPass_Project_Report.pdf
│
├── app.js
├── index.html
├── style.css
├── README.md
└── .gitignore
```

### `contract/`

Contains the Solidity smart contract responsible for:

- Internship issuance
- Internship verification
- Issuer authorization
- Internship revocation
- Student record retrieval

### `docs/`

Contains the project documentation and verification-related PDF files.

### `app.js`

Handles:

- MetaMask connection
- Ethers.js integration
- Smart contract interaction
- Internship verification
- Internship issuance
- Student records
- Revocation
- QR generation
- Shareable verification URLs

### `index.html`

Contains the ProofPass frontend structure and user interface.

### `style.css`

Contains the complete visual styling and responsive dark-theme interface.

---

## 🔄 How ProofPass Works

### 1️⃣ Issuer Creates an Internship

An authorized organization connects its wallet and enters the student's internship information.

```text
Issuer Wallet
     ↓
Enter Internship Details
     ↓
MetaMask Transaction
     ↓
Smart Contract
     ↓
Internship ID Created
```

---

### 2️⃣ Student Receives the Record

The internship is associated with the student's wallet address.

The student can connect their wallet and view their internship records through **My Internships**.

---

### 3️⃣ Recruiter Verifies the Internship

A recruiter can enter the Internship ID without connecting a wallet.

```text
Internship ID
      ↓
ProofPass Smart Contract
      ↓
Internship Record
      ↓
Verification Result
```

The verification page displays the relevant internship information and its current status.

---

### 4️⃣ Share the Proof

A verification result can be shared using a URL containing the Internship ID.

Example:

```text
https://your-domain.com/index.html?id=1
```

A QR code is also generated for convenient access.

---

### 5️⃣ Revoke When Necessary

If an internship record needs to be invalidated, an authorized issuer can revoke it.

The record remains traceable, but the verification result reflects its revoked state.

---

## 🔒 Smart Contract Security

ProofPass includes basic access-control and validation mechanisms to protect important operations.

### Issuer Authorization

Only authorized wallets can issue internship records.

### Issuer-Only Revocation

Only an authorized issuer can revoke records.

### Validation

The smart contract validates important inputs before modifying blockchain state.

### Record Traceability

Revoked records are not silently removed. They remain retrievable so that their verification history can be inspected.

> **Note:** ProofPass is currently deployed on the Sepolia testnet for educational and demonstration purposes. A production credential system would require independent smart-contract auditing, stronger key management, privacy controls, and operational governance.

---

## 🧪 Testing

The project was tested across the main smart-contract and frontend workflows.

| Test | Result |
|---|---|
| Smart contract deployment | ✅ Passed |
| Sepolia connection | ✅ Passed |
| Internship issuance | ✅ Passed |
| Internship verification | ✅ Passed |
| Student record retrieval | ✅ Passed |
| Issuer authorization | ✅ Passed |
| Internship revocation | ✅ Passed |
| Revoked record display | ✅ Passed |
| Invalid Internship ID handling | ✅ Tested |
| Date validation | ✅ Tested |
| QR verification | ✅ Tested |
| Shareable verification URL | ✅ Tested |
| MetaMask integration | ✅ Passed |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- A modern web browser
- [MetaMask](https://metamask.io/) installed
- Ethereum Sepolia network enabled
- Sepolia test ETH for blockchain transactions
- VS Code or another code editor
- Live Server or a local web server

### 1. Clone the repository

```bash
git clone https://github.com/Sahas-2417/ProofPass.git
```

### 2. Open the project

```bash
cd ProofPass
```

### 3. Configure the contract

Open:

```text
app.js
```

Make sure the deployed ProofPass contract address is configured correctly.

The frontend uses the deployed contract and the ABI included in `app.js`.

### 4. Run the frontend

Open the project using **VS Code Live Server** or another local web server.

Example:

```text
http://localhost:5500/index.html
```

### 5. Connect MetaMask

Switch MetaMask to:

```text
Ethereum Sepolia Testnet
```

Then connect your wallet through the ProofPass interface.

---

## 🌍 Deployment

The smart contract is deployed on:

```text
Ethereum Sepolia Testnet
```

### Smart Contract

```text
0xd825FF676A9ab4954897Cc6e7a95aB282E96B2aa
```

The contract address can be inspected on a Sepolia block explorer.

The frontend can be deployed to a static hosting platform such as Vercel or GitHub Pages.

---

## 📸 Project Preview

### Verification Interface

The main interface allows users to enter an Internship ID and retrieve the corresponding blockchain-backed record.

### Internship Record

The verification result displays:

- Company
- Internship role
- Student wallet
- Issuer wallet
- Internship duration
- Issue date
- Work description
- Current validity
- QR code
- Shareable verification link

---

## 📚 Documentation

Detailed project documentation is available inside the [`docs/`](./docs) directory.

- **[ProofPass Project Report](./docs/ProofPass_Project_Report.pdf)**
- **[ProofPass Verification Document](./docs/ProofPass%20Verification.pdf)**

---

## 🎯 Problem Statement

**ProofPass — Blockchain-Based Internship Verification**

The project was developed to demonstrate how blockchain technology can be used to create a transparent and independently verifiable internship credential system.

The implementation covers:

- Authorized internship issuance
- Unique internship identification
- Student-wallet association
- Public verification
- Issuer authorization
- Revocation
- Status tracking
- Shareable verification
- QR-based verification

---

## 🔮 Future Scope

Potential improvements include:

- Decentralized Identity integration
- Verifiable Credentials support
- Organization profiles
- Multi-level issuer authorization
- Recruiter verification dashboard
- Internship analytics
- Supporting document references
- Privacy-preserving credential storage
- Production blockchain deployment
- Enhanced smart-contract security and auditing

---

## 👨‍💻 Author

**Sahas Bochare**

B.Tech Information Technology

Interested in:

- Blockchain
- Data Analytics
- Business Analytics
- AI/ML
- Web Development

### Connect

- GitHub: [Sahas-2417](https://github.com/Sahas-2417)
- LinkedIn: Add your LinkedIn profile here

---

## ⭐ Project Status

```text
Smart Contract       ✅ Deployed
Sepolia Integration  ✅ Complete
Frontend             ✅ Complete
Verification         ✅ Working
Revocation           ✅ Working
QR Verification      ✅ Working
Documentation        ✅ Complete
GitHub Repository    ✅ Ready
```

> **ProofPass turns internship experience into a verifiable blockchain-backed record.** 🚀

If you find the project interesting, consider giving the repository a ⭐.