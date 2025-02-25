// script.js
const textArea = document.getElementById('text-area');
const keyboard = document.getElementById('keyboard');
const toggleLayoutButton = document.getElementById('toggle-layout');

let isArabic = true;

keyboard.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const key = e.target.getAttribute('data-key');
    textArea.value += key;
  }
});

toggleLayoutButton.addEventListener('click', () => {
  isArabic = !isArabic;
  toggleLayoutButton.textContent = isArabic ? 'Switch to English' : 'Switch to Arabic';
  updateKeyboardLayout();
});

function updateKeyboardLayout() {
  const arabicKeys = [
    ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د'],
    ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط'],
    ['ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  ];

  const englishKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  ];

  const keys = isArabic ? arabicKeys : englishKeys;
  keyboard.innerHTML = '';

  keys.forEach((rowKeys) => {
    const row = document.createElement('div');
    row.classList.add('row');
    rowKeys.forEach((key) => {
      const button = document.createElement('button');
      button.setAttribute('data-key', key);
      button.textContent = key;
      row.appendChild(button);
    });
    keyboard.appendChild(row);
  });

  // Add space bar
  const spaceRow = document.createElement('div');
  spaceRow.classList.add('row');
  const spaceBar = document.createElement('button');
  spaceBar.classList.add('space-bar');
  spaceBar.setAttribute('data-key', ' ');
  spaceBar.textContent = 'Space';
  spaceRow.appendChild(spaceBar);
  keyboard.appendChild(spaceRow);
}
