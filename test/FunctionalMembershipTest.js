import Membership from '../src/Membership';
import {assert} from 'chai';

describe('Memberships API Functional tests', function () {
  before(function () {
    this.serviceURL = 'http://service-memberships.dev/api/v1';
    this.api = new Membership(this.serviceURL, 'en');
  });

  it('Create SDK Object without locale', function() {
    const testApi = new Membership(this.serviceURL);
    assert.deepEqual(testApi.locale, 'en');
  });

  it('_isValidId', function () {
    assert.isTrue(this.api._isValidId(1));
    assert.isFalse(this.api._isValidId(0));
    assert.isFalse(this.api._isValidId(null));
    assert.isFalse(this.api._isValidId());
  });
});