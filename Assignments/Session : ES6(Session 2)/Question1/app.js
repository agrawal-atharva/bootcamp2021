const data = ['Atharva', 'Atharva', 'Agrawal', 'Bharat', 'Agrawal', 'Agrawal'];
console.log('Original: ' + data);

const filteredArray = [...new Set(data)];
console.log('Filtered Array: ' + filteredArray);
