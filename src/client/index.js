import {submitter} from './js/app'
import {updater} from './js/updater'
import './views/scss/styles.scss'

import './views/scss/background-big-cut.jpg'
import './views/img/paris.jpg'

// Event listener to add function to existing HTML DOM element
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('generate').addEventListener('click', submitter, false);

  });

export {
  submitter,
  updater
}