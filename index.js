function copyDiscord() {
  // Get text field.
  var copyText = document.getElementById("discordID");
  // Select text field.
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  // Copy text.
  navigator.clipboard.writeText(copyText.value);
}
