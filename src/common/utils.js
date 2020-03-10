
function copyToClipboard(message) {
  try {
    const input = document.createElement('textarea');
    input.value = message;
    document.body.appendChild(input);
    input.focus();
    input.select();
    document.execCommand('copy');
    input.remove();

    return true;
  } catch (error) {
    return false;
  }
}

function indicateSuccessOnToolbar() {
  chrome.browserAction.setBadgeText({ text: 'ok' });
  chrome.browserAction.setIcon({ path: 'static-content/iban-green.png' }, () => {
    setTimeout(() => {
      chrome.browserAction.setBadgeText({ text: '' });
      chrome.browserAction.setIcon({ path: 'static-content/iban-blue.png' });
    }, 1000);
  });
}

function issueNotification(message) {
  chrome.notifications.create(`iban-generator-notifications-${(Math.floor(Math.random() * 900000) + 100000).toString()}`, {
    message,
    type: 'basic',
    title: 'IBAN Generator',
    iconUrl: 'static-content/iban-green.png',
  });
}

export {
  copyToClipboard,
  indicateSuccessOnToolbar,
  issueNotification,
};
