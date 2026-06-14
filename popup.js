const textarea = document.getElementById('keywords');
const saveButton = document.getElementById('save');
const status = document.getElementById('status');

function parseKeywords(value) {
  return [...new Set(
    value
      .split('\n')
      .map((keyword) => keyword.trim().toLowerCase())
      .filter(Boolean)
  )];
}

async function loadKeywords() {
  const { keywords = [] } = await chrome.storage.sync.get({ keywords: [] });
  textarea.value = keywords.join('\n');
}

async function saveKeywords() {
  const keywords = parseKeywords(textarea.value);
  await chrome.storage.sync.set({ keywords });
  textarea.value = keywords.join('\n');
  status.textContent = `Saved ${keywords.length} keyword${keywords.length === 1 ? '' : 's'}.`;
  setTimeout(() => {
    status.textContent = '';
  }, 1600);
}

saveButton.addEventListener('click', saveKeywords);
textarea.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
    saveKeywords();
  }
});

loadKeywords();
