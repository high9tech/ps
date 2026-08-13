function appendConsole(msg) {
  const consoleBox = document.getElementById('consoleBox');
  const line = document.createElement('div');
  line.className = 'console-line';
  line.innerHTML = `<span class="prefix">[-]</span> ${msg}`;
  consoleBox.appendChild(line);
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

function logAction(type) {
  const consoleBox = document.getElementById('consoleBox');
  let text = '';
  if (type === 'netctrl') {
    text = `<div class="console-line"><span class="prefix">[-]</span> Running netctrl...</div>
<div class="console-line"><span class="prefix">[-]</span> netctrl executed.</div>`;
  } else if (type === 'lapse') {
    text = `<div class="console-line"><span class="prefix">[-]</span> Injecting lapse payload...</div>
<div class="console-line"><span class="prefix">[-]</span> lapse module loaded.</div>`;
  } else if (type === 'jailbreak') {
    text = `<div class="console-line"><span class="prefix">[-]</span> <span class="status-ready">Exploiting CSSFontFace UAF...</span></div>
<div class="console-line"><span class="prefix">[-]</span> Jailbreak environment ready!</div>`;
  }
  consoleBox.innerHTML += text;
  consoleBox.scrollTop = consoleBox.scrollHeight;
}
