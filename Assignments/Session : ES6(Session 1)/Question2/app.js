const items = Array.from(document.querySelectorAll('[data-time]'));
console.log('first : ' + items);

const filtered = items.filter((item) => item.textContent.includes('Flexbox'));
console.log('second :' + filtered);

const filt = filtered.map((item) => item.dataset.time);
console.log('third :' + filt);

const maps = filt.map((timecode) => {
	const parts = timecode.split(':').map((part) => parseFloat(part));
	return parts[0] * 60 + parts[1];
});
console.log('fourth :' + maps);

const maps2 = maps.reduce((runningTotal, seconds) => runningTotal + seconds);
console.log('fifth :' + maps2);
