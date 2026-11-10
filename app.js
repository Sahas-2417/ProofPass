// ============================================================
// ProofPass Frontend
// Replace CONTRACT_ADDRESS with your deployed Sepolia address.
// ============================================================

const CONTRACT_ADDRESS = "0xd825FF676A9ab4954897Cc6e7a95aB282E96B2aa";

const CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "issuer",
        "type": "address"
      }
    ],
    "name": "authorizeIssuer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "internshipId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "issuer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "companyName",
        "type": "string"
      }
    ],
    "name": "InternshipIssued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "internshipId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "issuer",
        "type": "address"
      }
    ],
    "name": "InternshipRevoked",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "role",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "startDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endDate",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "projectDescription",
        "type": "string"
      }
    ],
    "name": "issueInternship",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "issuer",
        "type": "address"
      }
    ],
    "name": "IssuerAuthorized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "issuer",
        "type": "address"
      }
    ],
    "name": "IssuerRevoked",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "internshipId",
        "type": "uint256"
      }
    ],
    "name": "revokeInternship",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "issuer",
        "type": "address"
      }
    ],
    "name": "revokeIssuer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "authorizedIssuers",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "internshipId",
        "type": "uint256"
      }
    ],
    "name": "getInternship",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "role",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "startDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endDate",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "projectDescription",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "issuer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "issuedAt",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "revoked",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMyInternships",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNextInternshipId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "student",
        "type": "address"
      }
    ],
    "name": "getStudentInternships",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "issuer",
        "type": "address"
      }
    ],
    "name": "isAuthorizedIssuer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "internshipId",
        "type": "uint256"
      }
    ],
    "name": "verifyInternship",
    "outputs": [
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "valid",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "status",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

let provider = null;
let signer = null;
let contract = null;
let currentAccount = null;

const $ = (id) => document.getElementById(id);

function configured() {
  return CONTRACT_ADDRESS &&
    CONTRACT_ADDRESS !== "PASTE_YOUR_SEPOLIA_CONTRACT_ADDRESS_HERE";
}

function showAlert(message, type = "error") {
  const box = $("alertBox");
  box.textContent = message;
  box.className = `alert ${type === "success" ? "success" : ""}`;
  box.classList.remove("hidden");
  clearTimeout(window.__alertTimer);
  window.__alertTimer = setTimeout(() => box.classList.add("hidden"), 6000);
}

function setLoading(show, title = "Processing transaction", text = "Please confirm the transaction in MetaMask.") {
  $("loadingOverlay").classList.toggle("hidden", !show);
  $("loadingTitle").textContent = title;
  $("loadingText").textContent = text;
}

function shortAddress(address) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function formatDate(timestamp) {
  return new Date(Number(timestamp) * 1000).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function toUnix(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return Math.floor(date.getTime() / 1000);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function getReadContract() {
  if (!configured()) {
    throw new Error("Add your deployed Sepolia contract address in app.js first.");
  }

  if (!provider) {
    provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
  }

  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
}

async function connectWallet() {
  if (!configured()) {
    showAlert("Add your deployed Sepolia contract address in app.js before connecting.");
    return;
  }

  if (!window.ethereum) {
    showAlert("MetaMask was not detected. Install MetaMask and reload the page.");
    return;
  }

  try {
    const browserProvider = new ethers.BrowserProvider(window.ethereum);
    await browserProvider.send("eth_requestAccounts", []);

    const network = await browserProvider.getNetwork();
    if (network.chainId !== 11155111n) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0xaa36a7" }]
        });
      } catch (switchError) {
        showAlert("Please switch MetaMask to Ethereum Sepolia (Chain ID 11155111).");
        return;
      }
    }

    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    currentAccount = await signer.getAddress();
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    $("connectBtn").classList.add("connected");
    $("connectBtn").innerHTML = `<span class="wallet-dot"></span>${shortAddress(currentAccount)}`;

    $("networkPill").textContent = "Sepolia • Connected";
    await updateIssuerUI();
    await loadMyInternships();

    showAlert("Wallet connected to Ethereum Sepolia.", "success");
  } catch (error) {
    showAlert(parseError(error));
  }
}

async function updateIssuerUI() {
  if (!currentAccount || !contract) return;

  try {
    const isIssuer = await contract.isAuthorizedIssuer(currentAccount);
    $("issuerStatus").textContent = isIssuer ? "Authorized issuer" : "Not authorized";
    $("issuerStatus").style.color = isIssuer ? "#45d39c" : "#ff6f7d";

    const owner = await contract.owner();
    $("issuerAdminPanel").classList.toggle(
      "hidden",
      owner.toLowerCase() !== currentAccount.toLowerCase()
    );
  } catch (error) {
    console.error(error);
  }
}

async function verifyInternship(id) {
  if (!id || Number(id) < 1) {
    showAlert("Enter a valid internship ID.");
    return;
  }

  try {
    const readContract = await getReadContract();

    const verification = await readContract.verifyInternship(id);
    const exists = verification[0];
    const valid = verification[1];
    const status = verification[2];

    if (!exists) {
      renderNotFound(id);
      return;
    }

    const data = await readContract.getInternship(id);
    renderVerification(data, valid, status);
  } catch (error) {
    showAlert(parseError(error));
  }
}

function renderNotFound(id) {
  $("verificationResult").innerHTML = `
    <div class="empty-icon">?</div>
    <h3>Internship #${escapeHtml(id)} not found</h3>
    <p>No ProofPass record exists for this internship ID.</p>
  `;
}

function renderVerification(data, valid, status) {
  const id = data[0].toString();
  const student = data[1];
  const company = data[2];
  const role = data[3];
  const start = data[4];
  const end = data[5];
  const description = data[6];
  const issuer = data[7];
  const issuedAt = data[8];

  const statusClass =
    status === "Revoked" ? "revoked" :
    status === "Completed" ? "completed" : "active";

  const shareUrl = `${window.location.origin}${window.location.pathname}?id=${encodeURIComponent(id)}`;

  $("verificationResult").className = "verification-card";
  $("verificationResult").innerHTML = `
    <div class="verification-head">
      <div>
        <span class="eyebrow">PROOFPASS RECORD #${escapeHtml(id)}</span>
        <h3>${escapeHtml(company)}</h3>
        <div style="color:#9299aa;font-size:11px;margin-top:5px">${escapeHtml(role)}</div>
      </div>
      <span class="status-badge ${statusClass}">
        <span></span>${escapeHtml(status.toUpperCase())}
      </span>
    </div>

    <div class="result-body">
      <div>
        <div class="detail-grid">
          <div class="detail">
            <span>Student wallet</span>
            <strong>${escapeHtml(student)}</strong>
          </div>
          <div class="detail">
            <span>Issuer</span>
            <strong>${escapeHtml(issuer)}</strong>
          </div>
          <div class="detail">
            <span>Start date</span>
            <strong>${formatDate(start)}</strong>
          </div>
          <div class="detail">
            <span>End date</span>
            <strong>${formatDate(end)}</strong>
          </div>
          <div class="detail">
            <span>Issued on</span>
            <strong>${formatDate(issuedAt)}</strong>
          </div>
          <div class="detail">
            <span>Validity</span>
            <strong>${valid ? "Blockchain record is valid" : "Record is not valid"}</strong>
          </div>
          <div class="detail full">
            <span>Project / work description</span>
            <strong>${escapeHtml(description)}</strong>
          </div>
        </div>

        <div class="result-actions">
          <button class="ghost-btn" onclick="copyVerificationLink('${encodeURIComponent(shareUrl)}')">Copy verification link</button>
          <button class="ghost-btn" onclick="shareVerification('${encodeURIComponent(shareUrl)}')">Share proof</button>
        </div>
      </div>

      <div>
        <div id="qrCode" class="qr-box"></div>
      </div>
    </div>
  `;

  if (window.QRCode) {
    new QRCode($("qrCode"), {
      text: shareUrl,
      width: 150,
      height: 150,
      colorDark: "#0b1020",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  }
}

async function copyVerificationLink(encodedUrl) {
  const url = decodeURIComponent(encodedUrl);
  try {
    await navigator.clipboard.writeText(url);
    showAlert("Verification link copied.", "success");
  } catch {
    showAlert(url, "success");
  }
}

async function shareVerification(encodedUrl) {
  const url = decodeURIComponent(encodedUrl);
  if (navigator.share) {
    try {
      await navigator.share({
        title: "ProofPass Internship Verification",
        text: "Verify this internship record on ProofPass.",
        url
      });
    } catch {}
  } else {
    await copyVerificationLink(encodedUrl);
  }
}

async function issueInternship(event) {
  event.preventDefault();

  if (!contract || !signer) {
    showAlert("Connect an authorized issuer wallet first.");
    return;
  }

  const student = $("studentAddress").value.trim();
  const company = $("companyName").value.trim();
  const role = $("role").value.trim();
  const startDate = $("startDate").value;
  const endDate = $("endDate").value;
  const description = $("projectDescription").value.trim();

  if (!ethers.isAddress(student)) {
    showAlert("Enter a valid student wallet address.");
    return;
  }

  if (toUnix(endDate) < toUnix(startDate)) {
    showAlert("End date cannot be before start date.");
    return;
  }

  try {
    const isIssuer = await contract.isAuthorizedIssuer(currentAccount);
    if (!isIssuer) {
      showAlert("This wallet is not an authorized issuer.");
      return;
    }

    setLoading(true, "Issue internship proof", "Confirm the transaction in MetaMask.");

    const tx = await contract.issueInternship(
      student,
      company,
      role,
      toUnix(startDate),
      toUnix(endDate),
      description
    );

    $("loadingText").textContent = "Transaction submitted. Waiting for Sepolia confirmation...";
    const receipt = await tx.wait();

    setLoading(false);

    // The contract increments from 1, so the most reliable UI fallback is
    // to read the next ID after confirmation.
    const nextId = await contract.getNextInternshipId();
    const issuedId = Number(nextId) - 1;

    $("issueForm").reset();
    showAlert(`Internship #${issuedId} was issued successfully. Tx: ${receipt.hash.slice(0, 18)}...`, "success");

    switchView("verifyView");
    $("verifyId").value = issuedId;
    await verifyInternship(issuedId);
  } catch (error) {
    setLoading(false);
    showAlert(parseError(error));
  }
}

async function authorizeIssuer() {
  if (!contract || !currentAccount) {
    showAlert("Connect the contract owner's wallet first.");
    return;
  }

  const address = $("issuerAddress").value.trim();

  if (!ethers.isAddress(address)) {
    showAlert("Enter a valid issuer wallet address.");
    return;
  }

  try {
    setLoading(true, "Authorize issuer", "Confirm the authorization transaction in MetaMask.");
    const tx = await contract.authorizeIssuer(address);
    await tx.wait();
    setLoading(false);

    $("issuerAddress").value = "";
    showAlert(`Issuer ${shortAddress(address)} is now authorized.`, "success");
  } catch (error) {
    setLoading(false);
    showAlert(parseError(error));
  }
}

async function loadMyInternships() {
  if (!currentAccount || !contract) {
    $("myInternships").innerHTML = `
      <div class="empty-result compact">
        <div class="empty-icon">⌁</div>
        <h3>Connect your wallet</h3>
        <p>Your internship proofs will appear here.</p>
      </div>`;
    return;
  }

  try {
    const ids = await contract.getMyInternships();

    if (!ids.length) {
      $("myInternships").innerHTML = `
        <div class="empty-result compact">
          <div class="empty-icon">○</div>
          <h3>No internships yet</h3>
          <p>No ProofPass records are linked to this wallet.</p>
        </div>`;
      return;
    }

    const records = [];
    for (const id of ids) {
      const data = await contract.getInternship(id);
      const verification = await contract.verifyInternship(id);
      records.push({ data, status: verification[2] });
    }

    $("myInternships").innerHTML = records.map(({data, status}) => {
      const statusClass =
        status === "Revoked" ? "revoked" :
        status === "Completed" ? "completed" : "active";

      return `
        <div class="internship-item">
          <div class="item-id">#${escapeHtml(data[0].toString())}</div>
          <div class="item-main">
            <strong>${escapeHtml(data[2])}</strong>
            <span>${escapeHtml(data[3])} • ${formatDate(data[4])} — ${formatDate(data[5])}</span>
          </div>
          <span class="status-badge ${statusClass}">
            <span></span>${escapeHtml(status)}
          </span>
        </div>`;
    }).join("");
  } catch (error) {
    showAlert(parseError(error));
  }
}

function parseError(error) {
  if (!error) return "Something went wrong.";

  if (error.code === 4001) return "Transaction rejected in MetaMask.";
  if (error.code === "ACTION_REJECTED") return "Transaction rejected in MetaMask.";

  const message =
    error.shortMessage ||
    error.reason ||
    error.info?.error?.message ||
    error.message ||
    "Transaction failed.";

  if (message.includes("Not an authorized issuer")) {
    return "This wallet is not an authorized issuer.";
  }

  if (message.includes("Only original issuer can revoke")) {
    return "Only the original issuer can revoke this internship.";
  }

  if (message.includes("Invalid internship dates")) {
    return "The end date must be on or after the start date.";
  }

  if (message.includes("Internship does not exist")) {
    return "That internship ID does not exist.";
  }

  return message.replace(/^execution reverted:\s*/i, "").slice(0, 260);
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active-view"));
  document.querySelectorAll(".nav-link").forEach(v => v.classList.remove("active"));

  $(viewId).classList.add("active-view");

  const nav = document.querySelector(`.nav-link[data-view="${viewId}"]`);
  if (nav) nav.classList.add("active");

  window.scrollTo({ top: document.querySelector(".workspace").offsetTop - 30, behavior: "smooth" });
}

document.querySelectorAll(".nav-link").forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

document.querySelectorAll("[data-view-target]").forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.viewTarget));
});

$("connectBtn").addEventListener("click", connectWallet);

$("verifyBtn").addEventListener("click", () => {
  verifyInternship($("verifyId").value);
});

$("verifyId").addEventListener("keydown", (event) => {
  if (event.key === "Enter") verifyInternship($("verifyId").value);
});

$("issueForm").addEventListener("submit", issueInternship);
$("authorizeBtn").addEventListener("click", authorizeIssuer);
$("refreshMyBtn").addEventListener("click", loadMyInternships);

if (window.ethereum) {
  window.ethereum.on("accountsChanged", async () => {
    window.location.reload();
  });

  window.ethereum.on("chainChanged", () => {
    window.location.reload();
  });
}

async function boot() {
  if (!configured()) {
    showAlert("Frontend ready — add your deployed Sepolia contract address in app.js.");
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id) {
    switchView("verifyView");
    $("verifyId").value = id;
    await verifyInternship(id);
  }
}

boot();
