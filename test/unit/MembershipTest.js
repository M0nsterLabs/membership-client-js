import Membership from '../../src/Membership';
import {assert} from 'chai';
import nock from 'nock';

describe('Memberships API Unit tests', function () {
  before(function () {
    this.serviceURL = 'http://service-memberships.dev/api/v1';
    this.api = new Membership(this.serviceURL, 'en');
    this.token = 'tokentokentokentokentokentoken';
    this.items = [{id: 0, name: 'name-0'}, {id: 1, name: 'name-1'}];
    this.nock = function (req, data) {
      nock(this.serviceURL).get(req).reply(200, data);
    }
  });

  it('getMembershipGroups', function (done) {
    this.nock('/membership-groups?locale=en', this.items);
    this.api.getMembershipGroups().then(response => {
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
    this.nock('/membership-subscriptions/my?status=active&locale=en', this.items);
    this.api.getListOfSubscriptions(this.token, {status: 'active'}).then(response => {
      assert.deepEqual(response, this.items);
      done();
    }).catch(done);
  });

  it('getSubscription', function (done) {
    this.nock('/membership-subscriptions/1?locale=en', this.items[0]);
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
});