import generateIBAN from './iban-generator';
import { copyToClipboard, indicateSuccessOnToolbar, issueNotification } from '../common/utils';

chrome.browserAction.onClicked.addListener(() => {
  copyToClipboard(generateIBAN());
  indicateSuccessOnToolbar();
  issueNotification('IBAN copied to clipboard!');
});
