# Code Snippets #
These are the functions (code), that has nothing to do with chrome extension development.

These are provided to save time and focus on chrome extension development, instead business logic.

### modulus ###
```javascript
function modulus(divident, divisor) {
  if (divident.length <= 2) {
    return parseInt(divident, 10);
  }

  const strippedDivident = divident.substring(0, Math.min(divident.length, 9));
  const remainingDivident = divident.substring(Math.min(divident.length, 9));

  return modulus(`${(parseInt(strippedDivident, 10) % divisor)}${remainingDivident}`, divisor);
}
```

### char to number ###
```javascript
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charToNumberDirectory = {};
chars.split('').forEach((char, index) => {
  charToNumberDirectory[char] = index + 10;
});
```
### copy to clipboard ###
```javascript
const input = document.createElement('textarea');
input.value = message;
document.body.appendChild(input);
input.focus();
input.select();
document.execCommand('copy');
input.remove();
```
