const prices = {
  1: '10.00',
  2: '18.00',
  3: '24.00'
};

const boxes = document.querySelectorAll('.box');
const totalPrice = document.getElementById('totalPrice');

// Loop through each box
boxes.forEach(box => {
  const radio = box.querySelector('input[type="radio"]');
  const sizeSelect = box.querySelector('.size-select');
  const colorSelect = box.querySelector('.color-select');
  const header = box.querySelector('.box-header');
  const content = box;
  const priceText = box.querySelector('.price');

  // When radio is selected
  radio.addEventListener('change', () => {
    // Remove active from all boxes
    boxes.forEach(b => b.classList.remove('active'));
    // Add active to this one
    box.classList.add('active');
    // Update total price
    totalPrice.textContent = `$${prices[radio.value]} USD`;
  });

  // When size is changed
  sizeSelect.addEventListener('change', () => {
    let fontSize = '16px';
    let boxHeight = 'auto';

    if (sizeSelect.value === 'S') {
      fontSize = '14px';
      boxHeight = '180px';
    } else if (sizeSelect.value === 'M') {
      fontSize = '16px';
      boxHeight = '220px';
    } else if (sizeSelect.value === 'L') {
      fontSize = '18px';
      boxHeight = '260px';
    }

    content.style.fontSize = fontSize;
    content.style.height = boxHeight;
  });

  // When color is changed
  colorSelect.addEventListener('change', () => {
    const colorValue = colorSelect.value;
    let colorCode = '#222';

    switch (colorValue) {
      case 'black':
        colorCode = '#222';
        break;
      case 'red':
        colorCode = '#f44336';
        break;
      case 'blue':
        colorCode = '#2196f3';
        break;
    }

    // Apply color to border
    content.style.borderColor = colorCode;

    // Apply color to heading
    header.style.color = colorCode;

    // Apply color to price text
    if (priceText) {
      priceText.style.color = colorCode;
    }
  });
});
