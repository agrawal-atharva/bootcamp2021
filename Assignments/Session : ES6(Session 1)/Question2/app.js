const items = Array.from(document.querySelectorAll('[data-time]'));
console.log('first : ' + items);

const filtered = items.filter((item) => item.textContent.includes('Flexbox'));
console.log('second :' + filtered);

const filt = filtered.map((item) => item.dataset.time);
console.log('third :' + filt);

