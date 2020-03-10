//
let bankCode;

// setup char to number directory
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charToNumberDirectory = {};
chars.split('').forEach((char, index) => {
  charToNumberDirectory[char] = index + 10;
});

function replaceCharWithNumber(inputValue) {
  let returnValue = '';
  inputValue.split('').forEach((char) => {
    returnValue += charToNumberDirectory[char] || char;
  });

  return returnValue;
}

// find modulus
function modulus(divident, divisor) {
  if (divident.length <= 2) {
    return parseInt(divident, 10);
  }

  const strippedDivident = divident.substring(0, Math.min(divident.length, 9));
  const remainingDivident = divident.substring(Math.min(divident.length, 9));

  return modulus(`${(parseInt(strippedDivident, 10) % divisor)}${remainingDivident}`, divisor);
}

// generate random IBAN
export default function generateIBAN() {
  const countryCode = 'NL';
  const randomNumber = (Math.floor(Math.random() * 9000000000) + 1000000000).toString();

  // assume checksum digit as 00
  let bsn = `${countryCode}00${bankCode}${randomNumber}`;

  // move first 4 digit to last
  bsn = bsn.substring(4) + bsn.substring(0, 4);

  // replace characters with number from a = 10 to z = 35
  bsn = replaceCharWithNumber(bsn);

  // remove leading zero if any
  bsn = bsn.replace(/^0+/, '');

  // calculate chcksum digit
  let checkSumDigit = (98 - modulus(bsn, 97)).toString();

  // pad checksum digit if required
  checkSumDigit = checkSumDigit.length === 1 ? `0${checkSumDigit}` : checkSumDigit;

  return `${countryCode}${checkSumDigit}${bankCode}${randomNumber}`;
}

function init() {
  // register storage change listener
  chrome.storage.onChanged.addListener((changes) => {
    const bankCodeChange = changes.bankCode && changes.bankCode.newValue;
    if (bankCodeChange) {
      bankCode = bankCodeChange;
    }
  });

  // initial value
  chrome.storage.sync.get({
    bankCode: 'INGB',
  }, (items) => {
    bankCode = items.bankCode;
  });
}

export {
  init,
  generateIBAN,
};
