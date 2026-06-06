export function showCommandPopup() {
  const popup = document.getElementById('commandPopupOverlay');
  const input = document.getElementById('commandPopupInput');
  if (popup && input) {
    input.value = '';
    popup.style.display = 'flex';
    input.focus();
  } else {
    console.error('Command pop-up elements (commandPopupOverlay or commandPopupInput) not found. Ensure HTML is present.');
    alert('Error: Command input dialog is missing. Cannot proceed without a command.');
  }
}
export function hideCommandPopup() {
  const popup = document.getElementById('commandPopupOverlay');
  if (popup) {
    popup.style.display = 'none';
  }
}
