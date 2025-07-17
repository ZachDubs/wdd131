const cyberTips = [
  "Use a password manager to generate and store strong, unique passwords.",
  "Enable multi-factor authentication (MFA) on all your accounts.",
  "Keep your software and operating system up to date.",
  "Be cautious of links and attachments in emails — even if they look legit.",
  "Back up your data regularly to an offline location.",
  "Avoid using public Wi-Fi for sensitive transactions unless you use a VPN.",
  "Lock your devices when not in use, even for a few minutes.",
  "Use unique passwords for every account — never reuse them.",
  "Always verify unexpected requests for personal or financial information.",
  "Don’t overshare personal information on social media."
];

// Get day of the year (0–365)
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// Rotate tip based on day of the year
function setCyberTip() {
  const index = getDayOfYear() % cyberTips.length;
  const tipElement = document.getElementById('cyber-tip-text');
  if (tipElement) {
    tipElement.textContent = cyberTips[index];
  }
}

setCyberTip();