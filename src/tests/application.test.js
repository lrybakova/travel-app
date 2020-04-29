const fectMock = require('fetch-mock');
const babelPolyfill = require('babel-polyfill');
import {submitter} from '../client/js/app';

describe('application', () => {
  test('submitter should be defined', () => {
    expect(submitter).toBeDefined();
  });
});