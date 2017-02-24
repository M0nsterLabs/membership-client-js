import Memberships from '../src/Memberships';
import {assert} from 'chai';
import nock from 'nock';

describe('Memberships API', function () {
  before(function () {
    this.serviceURL = 'http://service-memberships.dev/api/v1';
    this.api = new Memberships(this.serviceURL, 'en');
    this.token = 'tokentokentokentokentokentoken';
    this.items = [{
      id   : 0,
      name : 'name-0'
    }, {
      id   : 1,
      name : 'name-1'
    }];
    this.nock = function (req, data) {
      nock(this.serviceURL).
        get(req).
        reply(200, data);
    }
  });

  it('Create SDK Object without locale', function() {
    const testApi = new Memberships(this.serviceURL);
    assert.deepEqual(testApi.locale, 'en');
  });

  it('getMembershipGroups', function (done) {
    this.nock('/memberships-groups?locale=en', this.items);
    this.api.getMembershipGroups(this.token).then(response => {
      assert.deepEqual(response, this.items);
      done();
    }).catch(done);
  });

  it('getMemberships', function (done) {
    this.nock('/memberships?locale=en', this.items);
    this.api.getMemberships().then(response => {
      assert.deepEqual(response, this.items);
      done();
    }).catch(done);
  });

  it('getListOfSubscriptions', function (done) {
    this.nock('/membership-subscriptions/my?locale=en', this.items);
    this.api.getListOfSubscriptions(this.token).then(response => {
      assert.deepEqual(response, this.items);
      done();
    }).catch(done);
  });

  it('getSubscription', function (done) {
    nock(this.serviceURL).
      get('/membership-subscriptions/1?locale=en').
      reply(200, this.items[0]);

    this.api.getSubscription(this.token, 1).then(response => {
      assert.deepEqual(response, this.items[0]);
      done();
    }).catch(done);
  });

  it('getListOfDownloads', function (done) {
    this.nock('/membership-subscriptions/my/downloads/55555?locale=en', this.items);
    this.api.getListOfDownloads(this.token, 55555).then(response => {
      assert.deepEqual(response, this.items);
      done();
    }).catch(done);
  });

  it('getListOfDownloads', function (done) {
    this.nock('/membership-subscriptions/my/downloads/55555?locale=en', this.items);
    this.api.getListOfDownloads(this.token, 55555).then(response => {
      assert.deepEqual(response, this.items);
      done();
    }).catch(done);
  });

  it('_isValidId', function () {
    assert.isTrue(this.api._isValidId(1));
    assert.isFalse(this.api._isValidId(0));
    assert.isFalse(this.api._isValidId(null));
    assert.isFalse(this.api._isValidId());
  });
});