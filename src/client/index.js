import {submitter} from './js/app'
import {updater} from './js/updater'
import './styles/styles.scss'

import './views/img/background.jpg'
import './views/img/paris.jpg'

// Event listener to add function to existing HTML DOM element
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('generate').addEventListener('click', submitter, false);

  });

export {
  submitter,
  updater
}