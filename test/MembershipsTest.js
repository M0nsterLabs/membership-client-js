import Memberships from '../src/Memberships';
import {assert} from 'chai';
import nock from 'nock';

describe('Memberships API', function () {
  before(function () {
    this.serviceURL = 'http://service-memberships.dev/api/v1';
    this.api = new Memberships(this.serviceURL, 'en');
    this.token = 'tokentokentokentokentokentoken';
  });

  it('Create SDK Object without locale', function() {
    const testApi = new Memberships(this.serviceURL);
    assert.deepEqual(testApi.locale, 'en');
  });

  it('getMembershipGroups', function (done) {
    const items = [{
      id   : 0,
      name : 'name-0'
    }, {
      id   : 1,
      name : 'name-1'
    }];
    nock(this.serviceURL).
      get('/memberships-groups?locale=en').
      reply(200, items);
    this.api.getMembershipGroups(this.token).then(response => {
      assert.deepEqual(response, items);
      done();
    }).catch(done);
  });

  it('getMemberships', function (done) {
    const items = [{
      id    : 0,
      title : 'name-0'
    }, {
      id    : 1,
      title : 'name-1'
    }];
    nock(this.serviceURL).
      get('/memberships?locale=en').
      reply(200, items);

    this.api.getMemberships().then(response => {
      assert.deepEqual(response, items);
      done();
    }).catch(done);
  });

  it('getListOfSubscriptions', function (done) {
    const items = [{
      id         : 0,
      membership : {}
    }, {
      id         : 1,
      membership : {}
    }];
    nock(this.serviceURL).
      get('/membership-subscriptions/my?locale=en').
      reply(200, items);

    this.api.getListOfSubscriptions(this.token).then(response => {
      assert.deepEqual(response, items);
      done();
    }).catch(done);
  });

  it('getSubscription', function (done) {
    const item = {
      id         : 0,
      membership : {}
    };
    nock(this.serviceURL).
      get('/membership-subscriptions/1?locale=en').
      reply(200, item);

    this.api.getSubscription(this.token, 1).then(response => {
      assert.deepEqual(response, item);
      done();
    }).catch(done);
  });

  it('getListOfDownloads', function (done) {
    const items = [{
      id         : 0,
      product_id : 0
    }, {
      id         : 1,
      product_id : 1
    }];
    nock(this.serviceURL).
      get('/membership-subscriptions/my/downloads/55555?locale=en').
      reply(200, items);

    this.api.getListOfDownloads(this.token, 55555).then(response => {
      assert.deepEqual(response, items);
      done();
    }).catch(done);
  });

  it('getListOfDownloads', function (done) {
    const items = [{
      id         : 0,
      product_id : 0
    }, {
      id         : 1,
      product_id : 1
    }];
    nock(this.serviceURL).
      get('/membership-subscriptions/my/downloads/55555?locale=en').
      reply(200, items);

    this.api.getListOfDownloads(this.token, 55555).then(response => {
      assert.deepEqual(response, items);
      done();
    }).catch(done);
  });

  it('_idExist', function () {
    assert.isTrue(this.api._idExist(1));
    assert.isFalse(this.api._idExist(0));
    assert.isFalse(this.api._idExist(null));
    assert.isFalse(this.api._idExist());
  });
});